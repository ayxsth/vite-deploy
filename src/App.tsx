import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <img src="./vite.svg" className="logo" alt="Vite logo" />
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h1>Vite + React</h1>
      <p className="read-the-docs">
        Deploying a React app with Vite in GitHub using GitHub Actions
      </p>
    </div>
  );
}

export default App;
