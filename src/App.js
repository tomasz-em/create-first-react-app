import React from 'react';
import './App.scss';    // możliwe użycie SASSa, po zmianie nazwy pliku i pobraniu "node-sass"...

const ThisPageInfo = () => {  // KOMPONENT FUNKCYJNY, czyli BEZSTANOWY 
    // wprost zwrot wartości z tej funkcji jako zawartość do wyrenderowania na stronie 
  return (
    <div>
      {/*
* może być zwracany JEDEN ELEMENT do węzła DOM, bez równorzędnych (sąsiednich) elementów, więc używany był DIV jako opakowanie dla tej zwracanej
    zawartości...ale, czasami to burzyło prawidłową struktury HTMLa, przez taki kontener grupujący (np. dla elementów tabeli, ...)
* użycie SKRÓTU SKŁADNI "<>" i "</>" dla objęcia całości zwracanych elementów JSX poprzez"<React.Fragment></React.Fragment>"
* nie można użyć atrybutu HTMLa "class", które w JS jest SŁOWEM KLUCZOWYM, zamiennie "className" 
  */}
      <h1 className="blue-text">Pierwsze starcie z Reactem</h1>
      <p>Cała wyświetlana teraz zawartość stanowi jeden komponent <strong>App</strong>, który tworzą <em>ten</em> komponent <strong>ThisPageInfo
        </strong> oraz właściwy komponent <strong>LoginForm</strong> od wyświetlenia formularza. Bieżące informacje tworzą kolejne elementy DOM, 
        będące sąsiadami.</p>
      <h2>CEL: warunkowe wyświetlanie komponentu formularza logowania, uwzględniając jego wewnętrzny stan 
        (standardowo wyświetla pola do uzupełnienia, a po ich przesłaniu trzyma status zalogowanego i przedstawia przesłaną zawartość).</h2>
      <p>Wstępnie prezentowane są już uzupełnione pola formularza z przykładowymi danymi. Może tego nie widać, ale jest tu podpięty SASS (<em>node-sass</em>) ;) 
        oraz niewielka responsywność z zamianą kolejności treści (próg 700px szerokości ekranu).</p>
      <h4>Polecenie weryfikacji fomularza:</h4>
      <ul>
        <li>przesłanie pustych pól nie powinno się udać</li>
        <li>wyświetlenie niezbędnych komunikatów o błędzie</li>
        <li>graficzna interpretacja trójstanowego stanu formularza: gotowy/błędny/zalogowany jako alegoria dla utartych znaczeń kolorów</li>
        <li>prosta weryfikacja dla poprawnego adresu email</li>
        <li>sprawdzana także minimalna długość hasła</li>
      </ul>
    </div>
  );
}


class LoginForm extends React.Component {  // KOMPONENT STANOWY
  // do trzymania stanu, np. dla zawartości pól formularza, to trzeba użyć komponentu stanowego (stara notacja wewnątrz konstruktora)
      /* constructor () {
        super();  

        this.email = 'ktos@gdzies.pl';
        this.password = 'NIC'; 
      } */

  state = {
    email: 'ktos@gdzies.pl',
    password: 'pa$$w0rd',
    passwordMinLength: 5,
    isLoginError: false,
    isSubmited: false,
    isEmptyEmail: false,
    isValidEmail: true,
    isEmptyPassword: false  // można pisać nawet Z PRZECINKLIEM PO OSTATNIM ATRYBUCIE (zmienia się jedna linmia w gicie), 
        // ES6 to przyjmuje (lub transpiler do ES5 zamieni jak trzeba... o ile jest dostępny?)
  }

  isPassedCorrectEmail = ( email = "" ) => {  // ewentualna wartość domyślna
      // własna logika, użyta wcześniej w liście zadań z jQuery
    if ( ( email.length < 1 ) || ( email.indexOf('@') < 1 ) || ( email.lastIndexOf('.') < 3 ) || ( email.lastIndexOf('.') > (email.length - 3) ) ) {
      return false;
    }
  return true;  
  }

  isPasswordLengthCorrect = ( text = "" ) => {
    if ( text.length >= this.state.passwordMinLength ) return true;
  return false;  
  }

  warnAboutEmailAndPassword = () => {
    if ( !this.isPassedCorrectEmail( this.state.email ) ) this.setState({ isValidEmail: false });
    if ( !this.isPasswordLengthCorrect( this.state.password ) ) this.setState({ isTooShortPassword: true });
  }

  handleLogin = ( evt ) => {  // też dla submit używane
    evt.preventDefault();
    console.log('Clicked',  evt.target.name, evt.target.innerText );
    // console.log("STATE:", this.state);
      if ( ( this.state.email.length > 0 ) && ( this.state.password.length > 0) ) { // czy podano jakieś treści do OBU pól formularza?
            // czy podano prawidłową strukturę adresu email oraz wymaganą "złożoność" dla hasła?
        if ( this.isPassedCorrectEmail( this.state.email ) && ( this.isPasswordLengthCorrect( this.state.password ) ) ) {
            this.setState({ 
            isSubmited: true,
            isEmptyEmail: false,
            isValidEmail: true,
            isEmptyPassword: false,
            isTooShortPassword: false,
            isLoginError: false
         });
        }
        else {  //  weryfikacja JAKOŚCI podanych OBU treści z formularza -- zakładać NIEUDANĄ weryfikację poprawości pól
          this.warnAboutEmailAndPassword();
        }
      } 
      else {  // BRAK treści w formularzu, w JEDNYM lub KAŻDYM polu
        if ( this.state.email.length <= 0 ) this.setState({ isEmptyEmail: true, isLoginError: true });
        if ( this.state.password.length <= 0 ) this.setState({ isEmptyPassword: true, isLoginError: true });
          // też weryfikacja dla JAKOŚCI treści, możliwe przesłanie tylko jednego elementu
          // DRY!
        this.warnAboutEmailAndPassword();
      }
  }

  handleEmailChange = ( evt ) => {
    // evt.preventDefault();
    // this.email = evt.target.value;  // które THIS?!
    this.setState({ email: evt.target.value });
      if ( evt.target.value.length > 0 ) this.setState({ isEmptyEmail: false });  // ukryj komunikat o pustej zawartości
      if ( this.isPassedCorrectEmail( evt.target.value ) ) this.setState({ isValidEmail: true });  // ukryj komunikat o nieprawidłowej strukturze
    // console.log('Changed', evt.target.name, evt.target.value );
  }

  handlePassChange = ( evt ) => {
    // evt.preventDefault();
    // this.password = evt.target.value;
    this.setState({ password: evt.target.value });
      if ( evt.target.value.length > 0 ) this.setState({ isEmptyPassword: false });
      if ( this.isPasswordLengthCorrect( evt.target.value ) ) this.setState({ isTooShortPassword: false });
  }

  handleLogout = ( evt ) => {
    // evt.preventDefault();
    // this.password = evt.target.value;
    this.setState({ email: '', password: '', isSubmited: false });
      // nie potrzeba zmieniać powyżej żadnego innego atrybutu stanu, bo podczas zalogowania są już one resetowane :)  
  }

  render() {  // Z OBSŁUGĄ WARUNKOWEGO WYŚWIETLANIA ZAWARTOŚCI KOMPONENTU, TAKŻE WYBRANE OBSZARY KOMPONENTU.. zależnie od warunku 
    return (
      <div className={this.state.isSubmited ? "my-login-form logged-in" : (this.state.isLoginError) ? "my-login-form login-error" : "my-login-form" /* tu logika jest słaba, odwołuje się w rodzicu do warunku co poniżej */} >
        <form onSubmit={this.handleLogin}>

        { !this.state.isSubmited && (  // warunkowe wyświetlanie fragmentu danego komponentu WEWNĄTRZ danego komponentu - wariant FALSE
          <>
            <h2>Podaj swoje poświadczenia</h2>
            <p className="info">Oba pola są wymagane. Email musi mieć prawidłową strukturę, a hasło tworzyć 
            minimum {this.state.passwordMinLength} znaków.</p>
            <label htmlFor="email">email <span>*</span></label>
                {/* UWAGA na atrybut "for"! zamiast tego słowa kluczowego tu MUSI BYĆ UŻYTE "htmlFor"  */}
            <input type="text" id="email" name="email" onChange={this.handleEmailChange} value={this.state.email} />
            { this.state.isEmptyEmail ? (
              <p className="error-text">Pole emaila jest wymagane!</p> 
            ) : (null) }
            { !this.state.isValidEmail ? (
              <p className="error-text">Podano nieprawidłowy adres email!</p> 
            ) : (null) }


            <label htmlFor="pass">hasło <span>*</span></label>
            <input type="password" id="pass" name="pass" onChange={this.handlePassChange} value={this.state.password} />
            { this.state.isEmptyPassword ? (
              <p className="error-text">Pole hasła jest wymagane!</p> 
            ) : (null) }
            { this.state.isTooShortPassword ? (
              <p className="error-text">Hasło jest zbyt krótkie!</p> 
            ) : (null) }

            <input type="submit" value="Zaloguj" /* onClick={this.handleClick} */ />
          </>
        )}

        { this.state.isSubmited && (  //  warunkowe wyświetlanie fragmentu danego komponentu WEWNĄTRZ danego komponentu - wariant TRUE -- "zalogowany"
          <div>
            <h2>Jesteś zalogowany</h2>
            <h3>Brawo! W końcu udało Ci się trafić w ten duży przycisk ;)</h3>
            <br />
            <section className="info">
              <h3>Przesłana zawartość</h3> 
              <p>
                <label>email:</label>
                <code>{this.state.email}</code>
                <br />
                <label>hasło:</label>
                <code>{this.state.password}</code>
              </p>
            </section>
              <button onClick={this.handleLogout}>Wyloguj</button>
          </div>  
        )}
        </form>
      </div>
    );
  }
} 

const App = () => {
  /*
* może być zwracany JEDEN ELEMENT do węzła DOM, bez równorzędnych (sąsiednich) elementów, więc używany był DIV jako opakowanie dla tej zwracanej
  zawartości...ale, czasami to burzyło prawidłową struktury HTMLa, przez taki kontener grupujący (np. dla elementów tabeli, ...)
* użycie SKRÓTU SKŁADNI "<>" i "</>" dla objęcia całości zwracanych elementów JSX poprzez"<React.Fragment></React.Fragment>"
    - <React.Fragment> === <>
* nie można użyć atrybutu HTMLa "class", które w JS jest SŁOWEM KLUCZOWYM, zamiennie "className" 
  */

  return (
    <React.Fragment>
      <ThisPageInfo />  {/* jeden z dwóch wariantów użycia: jako TAG_DOMKNIĘTY */}
      <LoginForm></LoginForm> {/* ...lub jak tu możliwy zapis wraz z wymaganym TAGIEM_ZAMYKAJĄCYM */}
    </React.Fragment>
  );
}

export default App;