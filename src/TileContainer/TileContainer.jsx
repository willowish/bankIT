import React from 'react';
import Tile from './Tile/Tile';
import './TileContainerStyle.scss'
import * as TransferActions from '../TransferWindow/TransferActions';
import TransferStore from '../TransferWindow/TransferStore'

export default class TileContainer extends React.Component {
	constructor() {
		super();
	}

	newTransfer() {
		TransferActions.openTransferWindow();
	}

	render() {
		return (
			<div class="tails-container">
				<Tile title="Saldo"></Tile>
				<Tile title="Historia"></Tile>
				<Tile title="Wiadomosci"></Tile>
				<Tile title="Bilans"></Tile>
				<Tile title="Nowy przelew" onClick={this.newTransfer.bind(this)}></Tile>
			</div>
		);
	}
}