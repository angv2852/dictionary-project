import logo from "./dictionary2.jpg";
import "./App.css";
import Dictionary from "./Dictionary.js";

export default function App() {
  return (
    <div className="App">
      <div className="Container">
        <div className="outline">
          <header className="App-header">
            <h1>Dictionary</h1>
            <img src={logo} className="App-logo img fluid" alt="logo" />
          </header>
          <main>
            <Dictionary />
          </main>
        </div>
        <footer className="footer">
          <a
            href="https://github.com/angv2852/dictionary-project"
            target="blank"
          >
            Open-source code
          </a>{" "}
          by Angela Sullivan, hosted on{" "}
          <a
            href="https://clever-mirzakhani-f97d24.netlify.app/"
            target="blank"
          >
            Netlify
          </a>{" "}
        </footer>
      </div>
    </div>
  );
}
