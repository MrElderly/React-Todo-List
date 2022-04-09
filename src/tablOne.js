import logo from './cit.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://vk.com/mrmudrec"
          target="_blank"
          rel="noopener noreferrer"
        >
         Ne nen  ne
        </a>
        <a 
        className="Link1"
        href="/tablOne.js"> 
        Таблица учета Пациентов  
        </a> 
      </header>
    </div>
  );
}