import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import Select from 'react-select';

const validate = values => {
	const errors = {}

	if (!values.projectTitle) {
		errors.projectTitle = 'Project Title field is Required'
	} else if (values.projectTitle.length < 3) {
		errors.projectTitle = 'Must be greater than 3 characters'
	} else if (values.projectTitle.length > 15) {
		errors.projectTitle = 'Must be 15 characters or less'
	}

	if (!values.projectDescription) {
		errors.projectDescription = 'Project Description field is Required'
	} else if (values.projectDescription.length < 3) {
		errors.projectDescription = 'Must be greater than 3 characters'
	} else if (values.projectDescription.length > 150) {
		errors.projectDescription = 'Must be 150 characters or less'
	}

	return errors
}

export class NewProject extends React.Component {

	constructor(props){
		super(props);	
		this.state = {
			redirectToReferrer: false,
			disabled: false,
			value: [],
			errors: [],
	    };
		this.justSubmitted = this.justSubmitted.bind(this);
		this.back = this.back.bind(this);
		this.handleSelectChange = this.handleSelectChange.bind(this);
	}

	justSubmitted(event) {
		event.preventDefault();
		
		// Form Validation
		var fieldValues = [];
		for (let val of event.target.querySelectorAll('.validate')) fieldValues[val.name] = val.value;
		let validateErrors = this.props.validate(fieldValues);
		if(Object.keys(validateErrors).length > 0) {
			this.setState( { errors : validateErrors } );
			return false;
		}

		// Form Submission 
		this.setState( { errors : [] } );
		var firstName = event.target.querySelector('input[name="firstName"]');
		var lastName = event.target.querySelector('input[name="lastName"]');
		var email = event.target.querySelector('input[name="email"]');
		console.log(event);

	}

	back() {
		this.setState( { redirectToReferrer : true } );
	}

	handleSelectChange (value) {
		this.setState({ value });
	}

	render() {

		const { reset, submitting} = this.props;
		const errors = this.state.errors;

		let options = [];
		this.props.skills.map((elem, i) => {
			options.push({ label: elem.name, value: elem.name });
		});

		if (this.state.reset) {
			return (
				<Redirect to='newproject' />
			)
		}

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
								className="formvals col-sm-8 validate" 
								/>
								{ errors['projectTitle'] ? <span>{errors['projectTitle']}</span> : '' }
						</div>
					</div>

					<div className="form-group">
						<label className="col-sm-2">Project Description</label>
						<div>
							<Field 
								name="projectDescription" 
								component="textarea" 
								className="formvals col-sm-8 validate" 
								rows="3" 
							/>
							{ errors['projectDescription'] ? <span>{errors['projectDescription']}</span> : '' }
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
								placeholder="Select your required skills" 
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
							<button type="button" className="btn btn-default btn-sm proListFormBut" onClick={reset}> Reset</button>
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
};

NewProject = reduxForm({
  form: 'contact',
  validate,
})(NewProject);

NewProject = connect(
	mapStateToProps
)(NewProject)
