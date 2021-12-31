import book from "./book.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={book} className="img-fluid App-logo" alt="logo" />
      </header>
      <main>
        <Dictionary defaultKeyWord="sunset" />
        <div className="App-github">
          This project was coded by
          <a
            href="https://www.linkedin.com/in/soraya-guariente-04b1a3166/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Soraya Guariente{" "}
          </a>{" "}
          and is open-sorced on{" "}
          <a
            href="https://github.com/sorayaguariente/dictionary-project"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </main>

      <footer className="App-footer">Soraya Guariente 2021</footer>
    </div>
  );
}
