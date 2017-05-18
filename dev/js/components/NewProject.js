import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import Select from 'react-select';

export class NewProject extends React.Component {

	constructor(props){
		super(props);	
		this.state = {
			redirectToReferrer: false,
			disabled: false,
			value: [],
	    };
		this.justSubmitted = this.justSubmitted.bind(this);
		this.back = this.back.bind(this);
		this.handleSelectChange = this.handleSelectChange.bind(this);
	}

	justSubmitted(event) {
		event.preventDefault();
		var firstName = event.target.querySelector('input[name="firstName"]');
		var lastName = event.target.querySelector('input[name="lastName"]');
		var email = event.target.querySelector('input[name="email"]');
		console.log(event);
	}

	reset(event) {
		Array.from(document.getElementsByClassName("formvals")).forEach(
		    function(element, index, array) {
		        element.value = null;
		    }
		);
	}

	back() {
		this.setState( { redirectToReferrer : true } );
	}

	handleSelectChange (value) {
		this.setState({ value });
	}

	render() {

		let options = [];
		this.props.skills.map((elem, i) => {
			options.push({ label: elem.name, value: elem.name });
		});

		if (this.state.redirectToReferrer) {
			return (
				<Redirect to='myproject' />
			)
		}

		return (
			<div>
				<h2> New Project 
					<div className="pull-right">
						<button type="button" className="btn btn-default btn-sm proListFormBut" onClick={this.back}>&lt;&lt; Back</button>
					</div>
				</h2>
				<br /><br />

				<form onSubmit={this.justSubmitted} id="newProjectForm" className="form-horizontal">
					<div className="form-group">
						<label className="col-sm-2">Project Title</label>
						<div>
							<Field
								name="projectTitle"
								component="input"
								type="text"
								placeholder="Project Title"
								className="formvals col-sm-8" 
							/>
						</div>
					</div>

					<div className="form-group">
						<label className="col-sm-2">Project Description</label>
						<div>
							<Field 
								name="projectDescription" 
								component="textarea" 
								className="formvals col-sm-8" 
								rows="3" 
							/>
						</div>
					</div>

					<div className="form-group ">
						<label className="form-check-label col-sm-2">Team Leader </label>
						<div className="">
							<Field
								name="employed"
								id="employed"
								component="input"
								type="checkbox"
								className="form-check-input formvals"
							/>
						</div>
					</div>

					<div className="form-group ">
						<label className="form-check-label col-sm-2">Skills </label>
						<div className="">
							<Select 
								multi 
								simpleValue 
								disabled={this.state.disabled} 
								value={this.state.value} 
								placeholder="Select your favourite(s)" 
								options={options} 
								onChange={this.handleSelectChange} 
								className="col-sm-8"
							/>
						</div>
					</div>

					<br /> <br />
					<div className="form-group">
						<div className="col-sm-2"></div>
						<div className="col-sm-8 avoidpadleft">
							<button type="submit" className="btn btn-success btn-sm proListFormBut" >Publish Now</button>
							<button type="submit" className="btn btn-primary btn-sm proListFormBut" >Save</button>
							<button type="button" className="btn btn-default btn-sm proListFormBut" onClick={this.reset}> Reset</button>
						</div>
					</div>
				</form>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
  return {
    skills: state.skills
  }
}

NewProject.propTypes = {
	active: PropTypes.string,
	fields: PropTypes.array.isRequired,
};

NewProject = reduxForm({
  form: 'contact',
  fields: ['name', 'email', 'occupation', 'currentlyEmployed', 'sex']
})(NewProject);

NewProject = connect(
	mapStateToProps
)(NewProject)
