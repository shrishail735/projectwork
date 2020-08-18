const initstate={
    authError:null
}
const authReducer =(state=initstate,action)=>{
    switch(action.type){
        case 'LOGIN_ERROR':
            console.log('login failed');
            return{
                ...state,
                authError:action.err.message
            }
            
        case 'LOGIN_SUCCESS':
            console.log('login success');
            return{
                ...state,
                authError:null
            }
        case 'LOGOUT':
            console.log('Logout successful');
            return state
        case 'SIGNUP_S':
            console.log('Sign up success')
            return{
                ...state,
                authError:null
            }
        case 'SIGNUP_ERR':
            console.log("Failed signup")
            return{
                ...state,
                authError:action.err.message
            }
            
        default:
            return state
    }

}

export default authReducer;