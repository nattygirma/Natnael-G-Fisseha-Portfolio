// import './App.css';
import Home from './components/Home.js';
import Header from './components/Header.js';
import Works from "./components/Works.js";
import Contact from './components/Contact.js';
import AboutMe from './components/AboutMe.js';
import Skills from './components/Skills.js';

import {
  Routes,
  Route,
  // HashRouter
} from "react-router-dom";
  
function App() {
  return (
    <>
    <Header />
          <Routes>

    <Route exact path='/' element={< Home />}></Route>
    <Route exact path='/Works' element={< Works />}></Route>
    <Route exact path='/AboutMe' element={< AboutMe />}></Route>
    <Route exact path='/Contact' element={< Contact />}></Route>
    <Route exact path='/Skills' element={< Skills />}></Route>
   
          </Routes>

    </>
  );
}

export default App;
