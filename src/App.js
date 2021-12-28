import signature from "./signature.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={signature} className="img-fluid App-logo" alt="logo" />
      </header>
      <main>
        <Dictionary defaultKeyWord="sunset" />
      </main>
      <footer className="App-footer">Soraya Guariente 2021</footer>
    </div>
  );
}
