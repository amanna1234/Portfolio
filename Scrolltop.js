import React ,  {useEffect} from 'react';
import Scrolltops from './Scrolltop.css';

export default function Scrolltop() {
   let mybutton;
    useEffect(() => {
      
        mybutton = document.getElementById('myBtn');
       
      }, []);
    

    let scrollFunction = () => {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          mybutton.style.display = "block";
        } else {
          mybutton.style.display = "none";
        }
      }

      window.onscroll = scrollFunction;

      let topFunction = (e)  =>{
        
        document.body.scrollTop = 0; // For Safari
        
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      }
  return (
    
      <button className='shadow' onClick={topFunction} id="myBtn" title="Go to top">
        Top
        </button>
   
  );
}


    





  
  