import React, { Component } from 'react'
import { connect } from 'react-redux'
import signIn from '../../store/actions/authactions'
import { Redirect } from 'react-router-dom'

class SignIN extends Component {
    state={
    email:'',
    password:''
    }
    handlechange =(e)=>{
        this.setState({
       [e.target.id]:e.target.value
    })
}
    handlesubmit = (e)=>{
        e.preventDefault();
        this.props.signIn(this.state)
    }
    render() {
        const { authError , auth }=this.props;
        if(auth.uid&&auth.isLoaded)return <Redirect to='/' />
        return (
          <div className="container">
              <form onSubmit={this.handlesubmit} className="white">
                  <h4 className="grey-text ">Sign In</h4>
                  <div className="input-field">
                 <label htmlFor="email">Email</label>
                 <input type="email" id="email" onChange={this.handlechange} />
                 </div>
                 <div className="input-field">
                 <label htmlFor="password">Password</label>
                 <input type="password" id="password" onChange={this.handlechange} />
                 </div>
                 <button className="btn pink">Sign In</button>
                 <div className="red-text center">
                    { authError?<p>{authError}</p>:null}
                 </div>
              </form>
          </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        authError:state.auth.authError,
        auth:state.firebase.auth
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        signIn:(creds)=>dispatch(signIn(creds))
    }
        
    
}

export default connect(mapStateToProps,mapDispatchToProps)(SignIN);
