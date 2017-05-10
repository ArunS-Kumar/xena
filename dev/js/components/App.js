import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {TimeLine} from './Timeline';
import {AddProject} from './AddProject';

require('../../scss/style.scss');

export default class App extends React.Component {

	render() {
		return (
				<div>
					<Router >
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
							        <div id="navbarCollapse" className="collapse navbar-collapse">
							            <ul className="nav navbar-nav">
							                <li><Link to='/timeline'> Timeline </Link></li>
							                <li><Link to='/addproject'> Add Project </Link></li>
							                <li><Link to='/'>Messages </Link></li>
							            </ul>
							            <ul className="nav navbar-nav navbar-right">
							                <li><a href="#">Login</a></li>
							            </ul>
							            
							        </div>
							    </div>
							</nav>
							<Route exact path = "/" component = {TimeLine} />
						    <Route path = "/timeline" component = {TimeLine} />
						    <Route path = "/addproject" component = {AddProject} />
					    </div>			
					</Router>
				</div> 
			);
	}
}


