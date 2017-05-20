import React from 'react';
import LoadingBar from './loadingBar/LoadingBar'
import Navbar from './Navbar/Navbar';
import TileContainer from './TileContainer/TileContainer'
import TransferWindow from './TransferWindow/TransferWindow';
export default class Index extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div style={{height: 100 + 'vh'}}>
				<Navbar/>
				<TileContainer/>
				<TransferWindow/>
			</div>
		);
	}
}