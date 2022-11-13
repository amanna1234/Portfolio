import React from 'react';
import profileimg from './images/profile.jpg';
import Homeitems from './Homeitem.css';
import Typical from 'react-typical';
import Resume from './Resume/Resume.pdf'
import { Link } from 'react-scroll';

export default function Homeitem() {
  return (

    <div className="container-fluid">

      <div className="row main-row ">


        <div className="col-md-8  d-flex justify-content-center align-items-center flex-column order-2 order-md-1">
          <div className='d-flex justify-content-center primary-text'>HELLO, I'M <span className='Highlighted-text'>&nbsp;Karl</span> </div>
          
          <div className="typical m-0">
            <Typical
              steps={['Front-end-developer 🖥️ ', 1000,
                'HTML-CSS-Javascript 🧑‍💻', 1000,
                'REACT.JS 🚀 ', 1000]}
              loop={Infinity}
            />
          </div>
   
          <div className='aim text-center'>Aspire start career in web-development.</div>

          <div className="buttons my-3">
            <Link to = "form">
            <button className='hire-btn '>
              Hire Me
            </button>
            </Link>
            <a href={Resume} download="Resume.pdf">
            <button className='resume-btn '>
              Get Resume
            </button>
            </a>
           
          </div>

        </div>




        <div className="col-md-4  d-flex justify-content-center align-items-center order-1 order-md-2">
          <div className="profile-image d-flex overflow-hidden">
            <img src={profileimg} alt="" />
          </div>
        </div>




      </div>
    </div>
  )
}
