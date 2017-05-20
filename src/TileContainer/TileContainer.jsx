import React from 'react';
import Tile from './Tile/Tile';
import './TileContainerStyle.scss';
import * as IndexActions from '../IndexActions.js';
import IndexStore from '../IndexStore.jsx';

export default class TileContainer extends React.Component {
	constructor() {
		super();
	}

	onComponentMount() {
		IndexStore.on('BITCOIN_DATA_LOADED', ()=>{
			this.setState({
				showGraph: true,
				bitcoinData: IndexStore.getBitcoinData()
			})
		})
	}

	getGraphData() {
		IndexActions.getBitcoinData();
	}

	render() {
		return (
			<div class="tails-container">
				<Tile title="Salod"></Tile>
				<Tile title="Historia"></Tile>
				<Tile title="Wiadomosci"></Tile>
				<Tile title="Bilans"></Tile>
				<Tile title="Bitcoin" onClick={this.getGraphData()}>
					!this.state.showGraph?<Graph bitcoinData={this.state.bitcoinData}/>:null
				</Tile>
			</div>
		);
	}
}