import React, { useLayoutEffect } from "react";
import {NavLink} from 'react-router-dom';
const Signoutlink = ()=>{
    return(
       <ul  className="right hide-on-med-and-down">
           <li><NavLink to="/signup">Sign Up</NavLink></li>

           <li><NavLink to="/signin">Sign In</NavLink></li>
       </ul>
    )
}

export default Signoutlink;