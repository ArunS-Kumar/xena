import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { NewProject } from './NewProject';

export class MyProject extends React.Component {

	constructor(props){
		super(props);
		this.state = {
		      redirectToReferrer: false,
	    };
	    this.handleclick = this.handleclick.bind(this);
	}

	handleclick()
	{
       this.setState( { redirectToReferrer : true } );
	}

	render() {

		const projectlist = this.props.projectlist.map((elem, i) => {
				return (
					<tr key={i}>
						<th scope="row">{elem.id}</th>
						<td>{elem.projectName}</td>
						<td>{elem.projectDescription}</td>
						<td>
							<button type="button" className="btn btn-info btn-sm proListFormBut">Edit</button>
							<button type="button" className="btn btn-danger btn-sm proListFormBut">Delete</button>
						</td>
					</tr>
					)
		});

		if (this.state.redirectToReferrer) {
	      return (
	        <Redirect to='newproject' />
	      )
	    }

		return (
				<div>
					<h2>My Projects</h2>
					<div className="pull-right">
						<a className="btn btn-success btn-sm" role="button" onClick={this.handleclick}>New Project</a>
					</div>
					<br />
					<table className="table table-hover">
					   <thead>
					      <tr>
					         <th>#</th>
					         <th>Project Name</th>
					         <th>Project Description</th>
					         <th>Action</th>
					      </tr>
					   </thead>
					   <tbody>
					      {projectlist}
					   </tbody>
					</table>
				</div>
			);
	}
}

const mapStateToProps = (state) => {
  return {
    projectlist: state.projectlist
  }
}

MyProject = connect(
	mapStateToProps
)(MyProject)

