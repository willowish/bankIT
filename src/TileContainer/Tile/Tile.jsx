import React from 'react';
import './TileStyle.scss';
export default class Tile extends React.Component {
	constructor() {
		super();
	}

	render() {
		const title = Object.assign(this.props.title);
		return (
			<div class="single-tile-container col-sm-5 col-md-4">
				{title}
			</div>
		);
	}
}