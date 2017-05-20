import React from 'react';
import LoadingBar from './loadingBar/LoadingBar'
import Navbar from './Navbar/Navbar';
import TileContainer from './TileContainer/TileContainer'
import TransferWindow from './TransferWindow/TransferWindow';
import './IndexStyle.scss';

export default class Index extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div class="main-container">
				<Navbar/>
				<TileContainer/>
				<TransferWindow/>
			</div>
		);
	}
}