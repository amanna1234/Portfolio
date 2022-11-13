import React from 'react';
import Homeitem from './Homeitem';
import Navbar from './Navbar';
import Homes from './Home.css'

export default function Home(props) {
  return (
    <div className="container-fluid pb-2 home-main">
        <Navbar scroll = {props.scroll}/>
        <Homeitem/>
    </div>
   
  )
}
