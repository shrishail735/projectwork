import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { signUp } from '../../store/actions/authactions'

class SignUp extends Component {
    state={
    email:'',
    password:'',
    firstname:'',
    lastname:''
    }
    handlechange =(e)=>{
        this.setState({
       [e.target.id]:e.target.value
    })
}
    handlesubmit = (e)=>{
        e.preventDefault();
        //console.log(this.state)
        this.props.signUp(this.state)
    }
    render() {
        const {auth,authError} = this.props
        if(auth.uid)return <Redirect to='/' />
        return (
          <div className="container">
              <form onSubmit={this.handlesubmit} className="white">
                  <h4 className="grey-text ">Sign Up</h4>
                  <div className="input-field">
                 <label htmlFor="firstname">First-Name</label>
                 <input type="text" id="firstname" onChange={this.handlechange} />
                 </div>
                 <div className="input-field">
                 <label htmlFor="lastname">Last-Name</label>
                 <input type="text" id="lastname" onChange={this.handlechange} />
                 </div>
                  <div className="input-field">
                 <label htmlFor="email">Email</label>
                 <input type="email" id="email" onChange={this.handlechange} />
                 </div>
                 <div className="input-field">
                 <label htmlFor="password">Password</label>
                 <input type="password" id="password" onChange={this.handlechange} />
                 </div>
                 <button className="btn pink">Sign Up</button>
                 {authError?<p className="red-text center">{authError}</p>:null}

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
const mapDispathToProps=(dispatch)=>{
    return{
        signUp:(newUser)=>dispatch(signUp(newUser))
    }
}
export default connect(mapStateToProps,mapDispathToProps)(SignUp);
