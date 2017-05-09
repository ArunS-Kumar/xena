import React from 'react';

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
			            <ul className="nav navbar-nav">
			                <li className="active"><a href="#">Home</a></li>
			                <li><a href="#">Profile</a></li>
			                <li><a href="#">Messages</a></li>
			            </ul>
			            <ul className="nav navbar-nav navbar-right">
			                <li><a href="#">Login</a></li>
			            </ul>
			        </div>
			    </div>
			</nav>
			);
	}
}

