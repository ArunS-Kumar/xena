import React from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';

export class HeaderMenu extends React.Component {

	render() {
		return (
			<nav role="navigation" className="navbar navbar-default">
			    <div className="container">
			        <div className="navbar-header">
			            <button type="button" data-target="#navbarCollapse" data-toggle="collapse" className="navbar-toggle">
			                <span className="sr-only">Toggle navigation</span>
			                <span className="icon-bar"></span>
			                <span className="icon-bar"></span>
			                <span className="icon-bar"></span>
			            </button>
			            <a href="#" className="navbar-brand">XENA PROJECTS</a>
			        </div>
			        <div id="navbarCollapse" className="collapse navbar-collapse">
			        <HashRouter>
			            <ul className="nav navbar-nav">
			                <li><Link to='/'>Home</Link></li>
			                <li><Link to='/timeline'> Timeline </Link></li>
			                <li><a href="#">Messages</a></li>
			            </ul>
			            </HashRouter>
			            <ul className="nav navbar-nav navbar-right">
			                <li><a href="#">Login</a></li>
			            </ul>
			            
			        </div>
			    </div>
			</nav>
			);
	}
}


