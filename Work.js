import React from 'react'
import EducationDetails from './EducationDetails'
import Heading from './Heading'
import Template from './Template'
import Educations from "./Education.css";

export default function Work() {
  return (
    <div id = 'workhistory'>
    <Template>
        <Heading mainHeading = 'WORK HISTORY' subHeading = 'My Past Work Details'/>
        <div className="Education-details">
        <EducationDetails college = 'HVAC Project Engineer'  course = {["KNNd Associates Pvt Ltd - Bangalore, India", <ul key={10} align = 'justify' style={{opacity : '0.8', paddingLeft:'1rem'}} >
            <li >Planning, executing and handing over the HVAC project & Understating the technicality of the project and work accordingly.</li>
            <li >Site Work Inspection as per approved shop drawing & Material inspection as per approved material submittal.</li>
                        <li >Coordinate with other vendors and ensure clearance is available to start the HVAC works.</li>
            <li >Active involvement in weekly meetings with client to resolve the site related issues.</li>
            <li >Arrange the sufficient manpower and ensure all of them attended safety orientation and having proper personal protective equipment prior start installation activities at site.</li>
            <li >Billing of the project, site visit, Boq preparation, Estimation for new enquiries.</li>
        </ul>]}
duration = '2019-2022' />
        </div>
    </Template>
    </div>
  )
}
