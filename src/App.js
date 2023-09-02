import "./App.css";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import SectionBreak from "./components/SectionBreak";

function App() {
  return (
    <div className="container">
      <NavBar />
      <Header />
      <SectionBreak number="01" />
    </div>
  );
}

export default App;
