import React from 'react';
// import logo from './logo.svg';
import './App.scss';    // możliwe użycie SASSa, po zmianie nazwy pliku i pobraniu "node-sass"...

class Form extends React.Component {
  // do trzymania stanu, np. dla zawartości pól formularza, to trzeba użyć komponentu stanowego
  /* constructor () {
    super();  

    this.email = 'ktos@gdzies.pl';
    this.password = 'NIC'; 
  } */

  state = {
    email: 'ktos@gdzies.pl',
    password: 'pa$$',
    isSubmited: false,
    isEmptyEmail: false,
    isEmptyPassword: false

  }

  handleLogin = (evt) => {  // też dla submit używane
    evt.preventDefault();
    console.log('Clicked',  evt.target.name, evt.target.innerText );
    // console.log("STATE:", this.state);
      if ( ( this.state.email.length > 0 ) && ( this.state.password.length > 0) ) {
        this.setState({ 
          isSubmited: true,
          isEmptyEmail: false,
          isEmptyPassword: false
       });
      } 
      else {
        if ( this.state.email.length <= 0 ) this.setState({ isEmptyEmail: true });
        if ( this.state.password.length <= 0 ) this.setState({ isEmptyPassword: true });
      }
  }

  handleEmailChange = (evt) => {
    // evt.preventDefault();
    // this.email = evt.target.value;  // które THIS?!
    this.setState({ email: evt.target.value });
      if ( evt.target.value.length > 0 ) this.setState({ isEmptyEmail: false });
    // console.log('Changed', evt.target.name, evt.target.value );
  }

  handlePassChange = (evt) => {
    // evt.preventDefault();
    // this.password = evt.target.value;
    this.setState({ password: evt.target.value });
      if ( evt.target.value.length > 0 ) this.setState({ isEmptyPassword: false });
    // console.log('Changed', evt.target.name, evt.target.value );
  }

  handleLogout = (evt) => {
    // evt.preventDefault();
    // this.password = evt.target.value;
    this.setState({ email: '', password: '', isSubmited: false });
 
    // console.log('Changed', evt.target.name, evt.target.value );
  }

  render() {  // Z OBSŁUGĄ WARUNKOWEGO WYŚWIETLANIA ZAWARTOŚCI KOMPONENTU, TAKŻE WYBRANE OBSZARY KOMPONENTU.. zależnie od warunku 
    return (
      <div className="my-form">
        <form onSubmit={this.handleLogin}>

        { !this.state.isSubmited && (  // warunkowe wyświetlanie fragmentu danego komponentu WEWNĄTRZ danego komponentu - wariant FALSE
          <>
            <h2>Podaj swoje poświadczenia</h2> 
            <label>e-mail</label>
            <input type="text" name="email" onChange={this.handleEmailChange} value={this.state.email} />
            { this.state.isEmptyEmail ? (
              <p className="error-text">Pole emaila jest wymagane!</p> 
            ) : (null) }

            <label>hasło</label>
            <input type="password" name="pass" onChange={this.handlePassChange} value={this.state.password} />
            { this.state.isEmptyPassword ? (
              <p className="error-text">Pole hasła jest wymagane!</p> 
            ) : (null) }

            <input type="submit" value="Zaloguj" /* onClick={this.handleClick} */ />
          </>
        )}

        { this.state.isSubmited && (  //  warunkowe wyświetlanie fragmentu danego komponentu WEWNĄTRZ danego komponentu - wariant TRUE
          <p>
            <code>{this.state.email}</code>
            <code>{this.state.password}</code>
            <button onClick={this.handleLogout}>Logout</button>
          </p>
        )}
        </form>
      </div>
    );
  }
} 

const App = () => {
  return (
    <div>
      <h2 className="blue-text">Pierwsze starcie z Reactem</h2>
      <h4>Umożliwia warunkowe wyświetlanie dla formularza logowania wraz z uwzględnieniem jego wewnętrznego stanu.</h4>
      <p>Wstępnie uzupełnione pola z przykładowymi danymi.</p>
      <h4>Polecenie weryfikacji fomularza:</h4>
      <ul>
        <li>przesłanie pustych pól nie powinno się udać dl ategop formularza.</li>
        <li>wyświetlenie niezbędnych komunikatów o błędzie</li>
        <li>...</li>
      </ul>
      <Form />
    </div>
  );
}

export default App;
