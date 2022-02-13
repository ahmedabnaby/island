import Homepage from "./components/MainPages/Homepage";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Preloader from "./components/Preloader";
import Navbar from "./includes/Navbar"
import Footer from "./includes/Footer"
import "animate.css/animate.min.css";
function App() {
  return (
    <div className="body-wrapper">
    <Router>
      <Preloader/>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='/category/:id/' element={<Footer/>} />
        </Routes>
      <Footer/>
    </Router>
  </div>
  );
}

export default App;
