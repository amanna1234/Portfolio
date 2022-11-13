import React, { useState } from 'react';
import Educations from "./Education.css";
import skillitemss from './Skillitems.css'

export default function Skillitems(props) {
  
  return (
    <div className="container-fluid mb-2 my-3">
        <div className="row " style={{height:'fit-content'}}>
            <div className="col-2 col-sm-1 mb-2 d-flex justify-content-center align-items-center">
            <div className="edu-list-style "></div>
            </div>
            <div className="col-10 col-sm-5 college-name mb-2">
             {props.skill}
            </div>
            <div className="col-2 col-sm-1 mb-2">
             
            </div>

            <div className="col-10 col-sm-5 mb-2 d-flex justify-content-start align-items-center">
            <div className="main-bar " >
                <div className="progress-bar" style={{width: props.level}}>
                 
                </div>
             </div>
            </div>


            
        </div>
    </div>
  )
}
