import Homepage from "./components/MainPages/Homepage";
import Preloader from "./components/Preloader";
import Navbar from "./includes/Navbar"
import Footer from "./includes/Footer"
import "animate.css/animate.min.css";
function App() {
  return (
  <div className="body-wrapper">
    <Navbar/>
    <Preloader/>
    <Homepage/>
    <Footer/>
  </div>
  );
}

export default App;
