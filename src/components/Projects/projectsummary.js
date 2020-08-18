import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'

const ProjectSummary = ({project}) => {

    return (
        <div className="card z-depth-0 project-summary">
            < div className="card-content grey-text text-darken-4"> 
             <span className="card-title">{project.idea}</span>
            <p>posted by {project.authorFirstName} {project.authorLastName}  </p>
            <p className="grey-text">{moment(project.createdAt.toDate()).calendar()} </p>
            </div>
        </div>
    )
}

export default ProjectSummary;
