import React from 'react';
import Tile from './Tile/Tile';
import './TileContainerStyle.scss';
import * as IndexActions from '../IndexActions.js';
import IndexStore from '../IndexStore.jsx';
import Graph from './Graph';

export default class TileContainer extends React.Component {
	constructor() {
		super();
		this.state={};
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
				<Tile title="Bitcoin" >
					{!this.state
						|| !this.state.showGraph?null:<Graph bitcoinData={this.state.bitcoinData}/>}
				</Tile>
			</div>
		);
	}
}