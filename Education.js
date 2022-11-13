import React from "react";
import Educations from "./Education.css";
import EducationDetails from "./EducationDetails";
import Heading from "./Heading";
import Template from "./Template";
import Template2 from "./Template2";

export default function Education() {
  return (
    <div id = 'education'>
    <Template>
      
      <Heading mainHeading = 'EDUCATION' subHeading = 'My Education Details' />

      <Template2>
      <EducationDetails
          duration="2015-2019"
          college="Shri Madhva Vadhiraja Institute of Technology, Udupi"
          course="Bachelor of Engineering (B.E.), Mechanical Engineering"
        />

        <EducationDetails
          duration="2014-2015"
          college="Milagres Pu College Kalliyanpur, Udupi"
          course="Second Puc, Science."
        />

        <EducationDetails
          duration="2012-2013"
          college="Milagres English Medium School Kalliyanpur, Udupi"
          course="SSLC."
        />
      
      </Template2>
        

      </Template>
      </div>
   
  );
}
