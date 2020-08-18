import React from "react";
import {Link , NavLink} from 'react-router-dom';
import Signinlink from "./Signinlink";
import Signoutlink from "./signoutlink";
import { useLayoutEffect } from 'react';
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
const Navbar = (props)=>{
  const {auth,profile}=props
  const links= !auth.uid?<Signoutlink />:<Signinlink profile={profile}/>
    return(
      <div> 
        <nav className="nav-wrapper grey darken-3">
          <div className="container">
            <NavLink to="/" className="brand-logo hide-on-med-and-down">ProjectPlan</NavLink>
            <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
             { auth.isLoaded&&links }
            </div>
        </nav>

     <ul class="sidenav" id="mobile-demo">
       { auth.isLoaded&&links }
      </ul>
    </div>
        
    )
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.sidenav');
      // var instances = M.Sidenav.init(elems, options);
    });
}
const mapStateToProps=(state)=>{
  console.log(state);
  return{
     auth:state.firebase.auth,
     profile:state.firebase.profile
  }
}

export default connect(mapStateToProps)(Navbar);