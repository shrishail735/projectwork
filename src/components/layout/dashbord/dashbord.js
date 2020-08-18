import React, { Component } from 'react';
import Notifications from './notification';
import ProjectList from '../../Projects/projectlist';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';


class Dashbord extends Component{
    render(){
      const {projects,auth,notifications}=this.props
      if(auth.uid && auth.isLoaded){
        return(
          <div className="dashboard container">
          <div className="row">
          <div className="col s12 m6">
              <ProjectList projects={projects} />
          </div>
          <div className="col s12 m5 offset-m1">
              <Notifications notifications={notifications} />
          </div>
        
        </div>
        </div>
     
      )
      } 
      else{return <Redirect to='/signin' />}

        
        }
    }
 const mapStateToProps =(state)=>{
   //console.log(state);
     return {
      projects:state.firestore.ordered.projects,
      auth:state.firebase.auth,
      notifications:state.firestore.ordered.notifications
    }
 }

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection:'projects',orderBy:['createdAt','desc']},
    {collection:'notifications', limit: 3, orderBy:['time','desc']}
  ])
)(Dashbord)