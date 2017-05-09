import React from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';

import {HeaderMenu} from './Header';
import {TimeLine} from './Timeline';

require('../../scss/style.scss');

export default class App extends React.Component {

	render() {
		return (
				<div>
					<HeaderMenu />
					<HashRouter>
						<div>
						    <Route path = "/timeline" component = {TimeLine} />
			            </div>
					</HashRouter>
				</div> 
			);
	}
}


