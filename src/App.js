import "./App.css";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import SectionBreak from "./components/SectionBreak";
import PhotoGallery from "./components/PhotoGallery";
import Feature from "./components/Feature";
import Footer from "./components/Footer";

import hero1 from "./assets/desktop/image-hero-left.png";
import hero2 from "./assets/desktop/image-hero-right.png";

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
      <img src={hero1} alt="customer faces" className="hero1" />
      <img src={hero2} alt="customer faces" className="hero2" />
    </div>
  );
}

export default App;
