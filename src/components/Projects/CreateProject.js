import React, { Component } from 'react'
import { connect } from 'react-redux'
import createProject from '../../store/actions/projectaction'
import { Redirect } from 'react-router-dom'
class CreateProject extends Component {
    state={
    idea:'',
    description:''
    }
    handlechange =(e)=>{
        this.setState({
       [e.target.id]:e.target.value
    })
}
    handlesubmit = (e)=>{
        e.preventDefault();
       // console.log(this.state)
        this.props.createProject(this.state)
        this.props.history.push('/')
    }
    render() {
        const {auth}=this.props
        if(auth.uid)
        {
            return (
                <div className="container">
                    <form onSubmit={this.handlesubmit} className="white">
                        <h4 className="grey-text ">Add New Idea</h4>
                        <div className="input-field">
                       <label htmlFor="idea">Project-Idea</label>
                       <input type="text" id="idea" onChange={this.handlechange} />
                       </div>
                       <div className="input-field">
                       <label htmlFor="description">Explain Idea</label>
                       <textarea id="description" className="materialize-textarea" onChange={this.handlechange}></textarea>
                       </div>
                       <button className="btn pink">Add</button>
                    </form>
                </div>
            )
        }
        else{return <Redirect to='/signin' />}
    }
}
const mapStateToProps = (state)=>{
    return{
        auth:state.firebase.auth
    }
}
const mapDispatchToProps =(dispatch)=>{
    return {
        createProject:(project)=>dispatch(createProject(project))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CreateProject);
