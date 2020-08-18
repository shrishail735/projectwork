import { getFirestore } from "redux-firestore";

const signIn =(Credentails)=>{
    return(dispatch,getState,{getFirebase})=>{
      const firebase=getFirebase()

      firebase.auth().signInWithEmailAndPassword(
          Credentails.email,
          Credentails.password
      ).then(()=>{
          dispatch({type:'LOGIN_SUCCESS'});
      }).catch((err)=>{
          dispatch({type:'LOGIN_ERROR',err});
      });
    }
}
export const signOut=()=>{
    return(dispatch,getState,{getFirebase})=>{
        const firebase=getFirebase()
        firebase.auth().signOut().then(()=>{
            dispatch({type:'LOGOUT'});
        })
    }
}

export const signUp=(newUser)=>{
    return(dispatch,getState,{getFirebase,getFirestore})=>{
        const firebase=getFirebase()
        const firestore=getFirestore()
        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((resp)=>{
            firestore.collection('users').doc(resp.user.uid).set({
                userFirstName:newUser.firstname,
                userLastName:newUser.lastname,
                initials:newUser.firstname[0]+newUser.lastname[0]
            })
        }).then(()=>{
            dispatch({type:'SIGNUP_S'} )
        }).catch((err)=>{
            dispatch({type:'SIGNUP_ERR',err})
        })
    }
}
export default signIn;