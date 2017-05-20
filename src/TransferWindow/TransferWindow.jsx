import React from 'react';
import './TransferWindowStyle.scss'
import TransferStore from './TransferStore';
import TransferActions from './TransferActions';

export default class TransferWindow extends React.Component {
	constructor() {
		super();
		this.state = {
			showWindow: false
		}
	}

	componentWillMount() {
		TransferStore.on("window", this.openWindow.bind(this));
	}

	openWindow() {
		this.setState({
						  showWindow: true
					  });
	}

	render() {
		let windowComp;
		if (!this.state.showWindow) {
			windowComp = null
		} else {
			windowComp = (
				<div class="transfer-window-container"></div>
			);
		}
		return windowComp;
	}
}