import React from 'react';
import Educations from "./Education.css";

export default function Template(props) {
  return (
    <div className="container-fluid Education-main my-3 d-flex flex-column align-items-center py-4 flex-wrap">
{props.children}
        </div>
  )
}
