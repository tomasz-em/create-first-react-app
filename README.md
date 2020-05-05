# React
### _Wstęp do biblioteki React_, **zjazd 7** `2020 IV 25`

### Używanie Reacta poprzez środowisko **node** do ulepszonych działań na węzłach DOM
Dokumentacja: [https://reactjs.org](https://reactjs.org)  
Repozytorium github: [https://github.com/facebook/react](https://github.com/facebook/react)

### Podstawowe koncepcje, architektura, komponenty, cykl życia aplikacji

* paradygmat **programowania deklaratywnego** (też **funkcyjnego** ) kontra **programowania imperatywnego** ( też **proceduralnego**)
* szybki start _tego_ projektu jako wynikowego z użycia pakietu `create-react-app` dla gotowej konfiguracji biblioteki i środowiska
* utworzenie pierwszego komponentu
* definiowanie **komponentów bezstanowych** oraz **komponentów stanowych**
* przekazywanie parametrów pomiędzy komponentami
* definiowanie parametrów, ich typów oraz domyślnych wartości
* definicja stanu komponentu, ustawianie stanu za pomocą metody `setState`
* używanie zagnieżdżonych komponentów, dostęp do wewnętrznych struktur poprzez `props.children`
* cykl życia komponentu
* konstrukcje warunkowe i pętle w komponentach _reacta_

### **Create React App** jako ułatwiony start w ekosystemie Reacta - pakiet **create-react-app**

Dokumentacja: [https://create-react-app.dev/docs/getting-started/](https://create-react-app.dev/docs/getting-started/)  
Repozytorium github: [https://github.com/facebook/create-react-app](https://github.com/facebook/create-react-app)

_____

## Utworzenie pierwszego komponentu

### Pierwsze kroki z komponentami 
Komponent formularza logowania do witryny. Wersja podstawowa wymaga podania na wstępie dowolnej zawartości do dwóch pól tekstowych z rzeczowym opisem. Jeśli przesłano _cokolwiek_ w **obu polach**, to komponent powinien zaakceptować te dane i je wyświetlić. Powienien też przejść do wewnętrznego stanu _zalogowany_. Powrót do stanu _niezalogoany_ po naciśnięciu dostępnego przycisku.
* dla łatwiejszego korzystania można formularz wstępnie wypełnić "przykładowymi danymi" 
* wersja ulepszona powinna przyjmować tylko prawidłowy adres email (o prawidłowej strukturze **standardowego** adresu)
* wszelkie błędy we wprowadzonych wartościach powinny być wyświetlone na bieżąco (zależnie od przyjętego poziomu błędów i wymaganej jakości danych wejściowych)
* komponent winien prezentować swój stan w graficznej formie: niezalogowany (gotowy) / zalogowany / źle wypełniony
* ...

---

## **Działający przykład [https://create-first-react-app.now.sh/](https://create-first-react-app.now.sh/)**

---

## Uruchomienie (skrypty uruchamiające z domyślnego pakietu *create-react-app*)
**Oczywiście wymaga środowiska uruchomieniowego node!**

* Wykonaj **instalację lokalną** dla podległych zaległości, z których korzysta ten projekt: `npm install`.

* **Startuj poprzez** `npm start` - uruchomi się w trybie deweloperskim, co pozwala na łatwe testowanie i ewentualną edycję projektu.
Po uruchomieniu projekt wyświetli się w oknie domyślnej przeglądarki pod adresem [http://localhost:3000/](http://localhost:3000/).

UWAGA: witryna przeładowuje się na bieżąco podczas edycji plików źródłowych. Wszelkie błędy będą widoczne w konsoli oraz w aktywnym oknie przeglądarki www. Wtedy aplikacja nie skompiluje się, a także nie uruchomi się!

* `npm test` staruje interaktywny tryb **uruchamiania testów**. 

* `npm run build` powoduje **zbudowanie aplikacji** dla celów *produkcyjnych*, wynik działania w folderze `build`.

* O `npm run eject` nie piszę, dokumentacja _tego pakietu startowego_ szczegółowo do uwzględnia.
