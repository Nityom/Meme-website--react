import React from "react";
import { Link } from "react-router-dom";

const Navbarr =()=>{
    return(
    <div>
        <ul>
            <li>
              <a href="/"><p>Home</p> </a>
            </li>
            <li>
           <Link to ="/Bhupinder_Jogi"><p>Bhupinder Jogi</p></Link>
            </li>
            <li>
              <p>Jaldi waha se hato</p>  
            </li>
            <li>
            <Link to ="/Contact_Us"><p>Contact Us</p></Link>
            </li>
            <li>
           <Link to ="/about"><p>About</p></Link>
            </li>
        </ul>
    </div>
    
        );
}

export default Navbarr;