import "./App.css";
import Bio from "./components/Bio/Bio";
import Hello from "./components/Hello/Hello";
import NavBar from "./components/NavBar/NavBar";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Hello />
      <Bio />
    </div>
  );
}
