import React from 'react';
import './TransferWindowStyle.scss'
import TransferStore from './TransferStore';
import * as TransferActions from './TransferActions';

export default class TransferWindow extends React.Component {
	constructor() {
		super();
		this.state = {
			showWindow: false
		}
	}

	componentWillMount() {
		TransferStore.on("NEW_TRANSFER", this.toggleWindow.bind(this));
		TransferStore.on("CLOSE_TRANSFER_WINDOW", this.toggleWindow.bind(this));
	}

	componentWillUnmount() {
		TransferStore.removeListener("NEW_TRANSFER");
		TransferStore.removeListener("CLOSE_TRANSFER_WINDOW");
	}

	toggleWindow() {
		this.setState(
			{
				showWindow: !this.state.showWindow
			});
	}

	closeWindow() {
		TransferActions.closeTransferWindow();
	}

	render() {
		let windowComp;
		if (!this.state.showWindow) {
			windowComp = null
		} else {
			windowComp =
				(
					<div class="transfer-window-container">
						<i class="fa fa-times close-icon" onClick={this.closeWindow}></i>
						<div class="form-container">
							<form class="transfer-form">
								<div class="form-group">
									<label for="receiverName">Nazwa odbiorcy</label>
									<input type="text"
										   class="form-control"
										   id="receiverName"/>
								</div>
								<div class="form-group">
									<label for="accountNumber">Numer rachunku odbiorcy</label>
									<input type="text"
										   class="form-control"
										   id="accountNumber"/>
								</div>
								<div class="form-group">
									<label for="title">Tytułem</label>
									<textarea type="text"
											  maxLength="160"
											  rows="6"
											  class="form-control"
											  id="title"/>
								</div>
								<div class="buttons-container">
									<button class="btn btn-danger" onClick={this.closeWindow}>Cancel</button>
									<button class="btn btn-success" >Send</button>
								</div>
							</form>
						</div>
					</div>
				);
		}
		return windowComp;
	}
}