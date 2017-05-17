import React from 'react';
import {connect} from 'react-redux';

import { BrowserRouter as Router, Route, Link, HashRouter } from 'react-router-dom';
import {TimeLine} from './Timeline';
import {NewProject} from './NewProject';
import {MyProject} from './MyProject';

require('../../scss/style.scss');

export default class App extends React.Component {

	constructor(props){
		super(props);
		this.state = {
		      projectDropdownDisplay: false,
	    };
	    this.projectDropdown = this.projectDropdown.bind(this);
	}

	projectDropdown()
	{
		this.setState( { projectDropdownDisplay : !this.state.projectDropdownDisplay } );
	}

	render() {
		return (
				<div>
					<Router>
						<div>
							<nav role="navigation" className="navbar navbar-default">
							    <div className="container">
							        <div className="navbar-header">
							            <button type="button" data-target="#navbarCollapse" data-toggle="collapse" className="navbar-toggle">
							                <span className="sr-only">Toggle navigation</span>
							                <span className="icon-bar"></span>
							                <span className="icon-bar"></span>
							                <span className="icon-bar"></span>
							            </button>
							            <Link to='/' className="navbar-brand"> XENA PROJECTS </Link>
							        </div>
							        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
							            <ul className="nav navbar-nav">
							                <li><Link to='/timeline'> Timeline </Link></li>
							                <li><Link to='/myproject'> Projects </Link></li>
											
							                <li><Link to='/'>Messages </Link></li>
							            </ul>
							            <ul className="nav navbar-nav navbar-right">
							                <li><a href="#">Login</a></li>
							            </ul>
							            
							        </div>
							    </div>
							</nav>
							<div className="container">
								<Route exact path = "/" component = {TimeLine} />
							    <Route path = "/timeline" component = {TimeLine} />
							    <Route path = "/newproject" component = {NewProject} />
							    <Route path = "/myproject" component = {MyProject} />
						    </div>
					    </div>			
					</Router>
				</div> 
			);
	}
}
