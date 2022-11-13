import React from 'react'
import Footers from './Footer.css'
import Educations from "./Education.css";

export default function Footer() {
  return (
    <div className='footer-main d-flex justify-content-center align-items-center flex-column '>
      <p className='footer-main-text mt-2'>THANK YOU</p>
       <div className="edu-style my-4 d-flex justify-content-center align-items-center" style={{borderColor:'white'}}>
        <div className="edu-sub-style"></div>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/karl-kaushal-amanna-456332132" target={'_blank'} className='m-2'>
        <i className=" icon bi bi-linkedin"></i>
        </a>
        <a href="https://github.com/amanna1234"  className='m-2' target="_blank">
        <i className=" icon bi bi-github"></i>
        </a>
        <a href="https://www.instagram.com/karl_k_a/" target= "_blank" className='m-2'>
        <i className="icon bi bi-instagram"></i>
        </a>
      </div>
      <div className='email mt-2'><strong>Email -</strong> Karl1234470@gmail.com</div>
      <div className='email mb-2'><strong>Phone.no -</strong> 8050259088</div>
    </div>
  )
}
