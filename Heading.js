import React from 'react';
import Educations from "./Education.css";

export default function Heading(props) {
  return (
    <>
      <h3 className="my-2 Education-heading">{props.mainHeading}</h3>
      <div className="Education-subhead">{props.subHeading}</div>

      <div className="edu-style my-4 d-flex justify-content-center align-items-center">
        <div className="edu-sub-style"></div>
      </div>
    </>
  )
}
