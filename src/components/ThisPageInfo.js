import React from 'react';

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

export { ThisPageInfo };