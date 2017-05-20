import React from 'react';
import LoadingBar from './loadingBar/LoadingBar'
import Navbar from './Navbar/Navbar';

export default class Index extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div>
				<Navbar/>
			</div>
		);
	}
}