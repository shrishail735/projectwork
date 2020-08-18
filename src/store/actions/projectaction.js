import { getFirebase } from "react-redux-firebase";
import { getFirestore } from "redux-firestore";

 const createProject = (project) =>{
  return (dispatch,getState,{getFirebase,getFirestore})=>{
    const authorId=getState().firebase.auth.uid
    const firstname=getState().firebase.profile.userFirstName
    const lastname=getState().firebase.profile.userLastName
    const fb=getFirestore();
    fb.collection('projects').add({
      idea:project.idea,
      description:project.description,
      authorFirstName:firstname,
      authorLastName:lastname,
      authorId:authorId,
      createdAt:new Date()
    }).then(()=>{
      dispatch({type:'CREATE_PROJECT',project});
    }).catch((err)=>{
      dispatch({type:'CREATE_ERROR',err});
    })
  }
};
export default createProject;