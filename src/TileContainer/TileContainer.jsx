import React from 'react';
import Tile from './Tile/Tile';
import './TileContainerStyle.scss'

export default class TileContainer extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div class="tails-container">
				<Tile title="Salod"></Tile>
				<Tile title="Historia"></Tile>
				<Tile title="Wiadomosci"></Tile>
				<Tile title="Bilans"></Tile>
			</div>
		);
	}
}