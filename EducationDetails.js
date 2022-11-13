import React from "react";
import Educations from "./Education.css";

export default function EducationDetails(props) {
  return (
    
      <div className="container-fluid my-3">
        <div className="row">
          <div className="col-2 col-sm-1  d-flex justify-content-center align-items-start" key={3}>
            <div className="edu-list-style mt-3" ></div>
          </div>

          <div className="col-10 col-sm-7 ">
            <div className="row">
              <div className="col-12  college-name" >{props.college}</div>
              <div className="col-12  course-name my-1" >{props.course}</div>
            </div>
          </div>

          <div className="col-2 col-sm-1 "></div>

          <div className="col-6 col-sm-3 my-2">
            <div className="  Education-duration px-3 d-flex justify-content-center align-items-center">
              {props.duration}
            </div>
          </div>
        </div>
      </div>
    
  );
}
