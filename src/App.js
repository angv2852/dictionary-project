import logo from "./dictionary.jpg";
import "./App.css";
import Dictionary from "./Dictionary.js";

export default function App() {
  return (
    <div className="App">
      <div className="Container">
        <header className="App-header">
          <img src={logo} className="App-logo img fluid" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="footer">
          Open-source code by Angela Sullivan, hosted on Netlify
        </footer>
      </div>
    </div>
  );
}
