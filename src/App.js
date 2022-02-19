import Homepage from "./components/MainPages/Homepage";
import Projects from "./components/MainPages/Projects";
import Page404 from "./components/MainPages/Page404";
import {BrowserRouter as Router, Route, Routes, useParams} from 'react-router-dom';

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
          <Route path='/category/:categoryId/' element={<Projects/>} />
          <Route path='*' exact={true} element={<Page404/>} />
        </Routes>
      <Footer/>
    </Router>
  </div>
  );
}

export default App;
