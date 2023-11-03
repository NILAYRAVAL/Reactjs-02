import logo from './logo.svg';
import './App.css';
import Class from './Componets/Class';
import FunctionComponent from './Componets/Function';
import "primereact/resources/themes/lara-light-indigo/theme.css";

function App() {
  return (
    <>
      <header className="App-header">

        <Class name = "Rohit-Sharma"/>
        <img src={logo} className="App-logo" alt="logo" />
        <FunctionComponent name ="Virat-kohli"/>
      </header>
    </>
  );
}

export default App;
