import "./App.css";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import SectionBreak from "./components/SectionBreak";
import PhotoGallery from "./components/PhotoGallery";
import Feature from "./components/Feature";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
      <NavBar />
      <Header />
      <SectionBreak number="01" margin="7.3" />
      <PhotoGallery />
      <Feature />
      <SectionBreak number="02" margin="4.5" />
      <Footer />
    </div>
  );
}

export default App;
