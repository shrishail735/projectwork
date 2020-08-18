import React from 'react'
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import moment from 'moment'
const Projectdetails=(props)=> {
    const id=props.match.params.id;
     console.log(props)
    const { pro ,auth }=props;
    if(!auth.uid){ return <Redirect to='/signin' />}

    if(pro === undefined){ return (
        <h1>Not found</h1>
    ) }
   else if( pro )
    {
    return (
        <div className="section container prject-details ">
            <div className="card z-depth-0">
                <div className="card-content">
                   <span className="card-title white">{pro.idea} </span>
                  <p>{pro.description}</p>

                </div>
                <div className="card-action">
                    <div>posted by { pro.authorFirstName}</div>
                    <div>{moment(pro.createdAt.toDate()).calendar()} </div>
                </div>
              
            </div>

        </div>
    )
    }
    else{
        return(
       <div className="container center grey-text">
           <h1 className="white">Project is loading please wait. ....... </h1>
       </div>
        )
    }
    
}
const mapStateToProps= (state,ownProps)=>{
    // console.log(state);
    const id=ownProps.match.params.id;
    const projects=state.firestore.data.projects;
    const project=projects?projects[id]:null
       return{
        pro:project,
        auth:state.firebase.auth
   }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection:'projects'}
    ])
)(Projectdetails)
