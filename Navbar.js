import React from 'react';
import Navbars from './Navbar.css'
import Education from './Education';
import Form from './Form'
import { Link } from 'react-scroll';

export default function Navbar(props) {
  return (
    
      <nav className="navbar navbar-expand-md  pt-0">
  <div className="container-fluid ">
    <a className="navbar-brand nav-brand" href="/">KARL</a>
    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNav">
      <ul className="navbar-nav">
        

        <li className="nav-item">
          <Link role="button" className="nav-link active nav-items" aria-current="page" to="education">Education</Link>
        </li>

        <li className="nav-item">
          <Link role="button" className="nav-link active nav-items" aria-current="page" to="workhistory">Work History</Link>
        </li>

        <li className="nav-item">
          <Link role="button" className="nav-link active nav-items" aria-current="page" to="skills">Skills</Link>
        </li>

        <li className="nav-item">
          <Link role="button" className="nav-link active nav-items" aria-current="page" to='form' >Contact Me</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
   
  )
}
