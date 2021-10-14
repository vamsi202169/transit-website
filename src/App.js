import logo from './assets/kabilla_logo.png';
import Background from "./assets/Background.png";
import Typist  from 'react-typist';
import './App.css';

function App() {
  return (
    <div className="App" style={{backgroundImage:`url(${Background})`,height:"100vh"}}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> 
        <Typist
          cursor={{ hideWhenDone: true, blink: true }}
          className="animating_text"
        >
          <p className="header_one">The next big thing 🚀 in the Creator Economy &#128184;</p>
        </Typist>
        <Typist
          cursor={{ hideWhenDone: true, blink: true }}
          className="animating_text"
        >
          <p className="header_two">Supercharging 🔥 Creator Communities 👩‍🎨🧑‍🎨</p>
        </Typist>
        <p className="glow">Coming Soon</p>
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>

    </div>
  );
}

export default App;
