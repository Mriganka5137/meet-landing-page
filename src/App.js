import "./App.css";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import SectionBreak from "./components/SectionBreak";
import PhotoGallery from "./components/PhotoGallery";
import Feature from "./components/Feature";
import Footer from "./components/Footer";

import hero1 from "./assets/desktop/image-hero-left.png";
import hero2 from "./assets/desktop/image-hero-right.png";
import hero3 from "./assets/tablet/image-hero.png";
import SectionBreak2 from "./components/SectionBreak2";

function App() {
  return (
    <div className="container">
      <NavBar />
      <Header />
      <SectionBreak />
      <PhotoGallery />
      <Feature />
      <SectionBreak2 />
      <Footer />
      <img src={hero1} alt="customer faces" className="hero1" />
      <img src={hero2} alt="customer faces" className="hero2" />
      <img src={hero3} alt="customer faces" className="hero3" />
    </div>
  );
}

export default App;
