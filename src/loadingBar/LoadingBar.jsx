import React from 'react';
import './LoadginBarStyle.scss';
export default class LoadingBar extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div class="bouncing-box-container">
				<div class="bouncing-box"></div>
				<div class="bouncing-box"></div>
				<div class="bouncing-box"></div>
				<div class="bouncing-box"></div>
				<div class="bouncing-box"></div>
			</div>
		);
	}
}