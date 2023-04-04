import "./App.css";
import Hello from "./components/Hello/Hello";
import NavBar from "./components/NavBar/NavBar";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Hello />
    </div>
  );
}
