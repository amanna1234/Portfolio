
import './App.css';
import Home from './components/Home';
import Education from './components/Education';
import Work from './components/Work';
import Skills from './components/Skills';
import Form from './components/Form';
import Footer from './components/Footer';
import { useRef } from 'react';
import Scrolltop from './components/Scrolltop';

function App() {

  
  return (
   <div className="main ">
    <Home />
    <Education/>
    <Work />
    <Skills />
    <Form  />
    <Footer/>
    <Scrolltop />
    
   </div>
  );
}

export default App;
