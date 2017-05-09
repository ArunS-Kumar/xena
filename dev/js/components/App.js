import React from 'react';
import {HeaderMenu} from './Header';
import {TimeLine} from './Timeline';

require('../../scss/style.scss');

export default class App extends React.Component {

	render() {
		return (
			<div>
				<HeaderMenu />
				<TimeLine />
			</div>
			);
	}
}


