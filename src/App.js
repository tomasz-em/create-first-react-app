import React from 'react';

import './App.scss';    // możliwe użycie SASSa, po zmianie nazwy pliku i pobraniu "node-sass"...
import { ThisPageInfo } from './components/ThisPageInfo';
import { LoginForm } from './components/LoginForm';

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