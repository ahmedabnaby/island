import Homepage from "./components/MainPages/Homepage";
import Preloader from "./components/Preloader";
import Navbar from "./includes/Navbar"
import "animate.css/animate.min.css";
function App() {
  return (
  <div className="body-wrapper">
    <Navbar/>
    <Homepage/>
    <Preloader/>
  </div>
  );
}

export default App;
