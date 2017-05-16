import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm, Select} from 'redux-form';
// import DropdownList from 'react-widgets/lib/DropdownList';
// import SelectList from 'react-widgets/lib/SelectList';
// import Multiselect from 'react-widgets/lib/Multiselect';
// import 'react-widgets/dist/css/react-widgets.css'

export class NewProject extends React.Component {

	constructor(props){
		super(props);	
		console.log(props);	
		this.justSubmitted = this.justSubmitted.bind(this);
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

	render() {

		const options = [
			{ value: 'one', label: 'One' },
			{ value: 'two', label: 'Two' }
		];
		return (
			<div>
			<h2> New Project </h2>
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
		          <Field name="projectDescription" component="textarea" className="formvals col-sm-8" rows="3" />
		        </div>
		      </div>
	      
				<div className="form-group ">
				  <label className="form-check-label col-sm-2">Option one is this </label>
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

		      <div className="form-group">
		      	<div className="col-sm-2"></div>
		      	<div className="col-sm-8">
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

NewProject.propTypes = {
	active: PropTypes.string,
	fields: PropTypes.array.isRequired,
};

NewProject = reduxForm({
  form: 'contact',
  fields: ['name', 'email', 'occupation', 'currentlyEmployed', 'sex']
})(NewProject);
