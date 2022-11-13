import React from 'react'
import Heading from './Heading'
import Skillitems from './Skillitems'
import Template from './Template'
import Template2 from './Template2'

export default function Skills(props) {
  return (
    <div id= 'skills'>
    <Template>
        <Heading mainHeading = 'SKILLS' subHeading = 'My Programming Skills' />
        <Template2>
            
            <Skillitems skill = 'HTML' level = '90%'/>
            <Skillitems skill = 'CSS' level = '70%'/>
            <Skillitems skill = 'Javascript' level = '75%'/>
            <Skillitems skill = 'React.js' level = '70%'/>
            <Skillitems skill = 'SQL' level = '60%'/>
            <Skillitems skill = 'Bootstrap' level = '65%'/>
            
            
        </Template2>
    </Template>
    </div>
  )
}
