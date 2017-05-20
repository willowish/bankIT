import React from 'react';
import Tile from './Tile/Tile';
export default class TileContainer extends React.Component {
	constructor() {
		super();
	}

	render() {
		const tiles = this.props.tiles.map(item => <Tile tail={item}></Tile>);
		return (
			<div class="tail-container">
				{tiles}
			</div>
		);
	}
}