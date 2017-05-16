import React from 'react';
import { Redirect } from 'react-router-dom';
import {NewProject} from './NewProject';

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

		if (this.state.redirectToReferrer) {
	      return (
	        <Redirect to='newproject' />
	      )
	    }

		return (
			<div>
				<h2>My Project</h2>
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
				      <tr>
				         <th scope="row">1</th>
				         <td>Mark</td>
				         <td>Otto</td>
				         <td>
				         	<button type="button" className="btn btn-info btn-sm proListFormBut">Edit</button>
							<button type="button" className="btn btn-danger btn-sm proListFormBut">Delete</button>
						 </td>
				      </tr>
				      <tr>
				         <th scope="row">2</th>
				         <td>Jacob</td>
				         <td>Thornton</td>
				         <td>
				         	<button type="button" className="btn btn-info btn-sm proListFormBut">Edit</button>
							<button type="button" className="btn btn-danger btn-sm proListFormBut">Delete</button>
						 </td>
				      </tr>
				      <tr>
				         <th scope="row">3</th>
				         <td>Larry</td>
				         <td>the Bird</td>
				         <td>
				         	<button type="button" className="btn btn-info btn-sm proListFormBut">Edit</button>
							<button type="button" className="btn btn-danger btn-sm proListFormBut">Delete</button>
						 </td>
				      </tr>
				   </tbody>
				</table>
				</div>
			);
	}
}


