import React from 'react';
import indexStore from '../IndexStore';
import './NavbarStyle.scss';

export default class Navbar extends React.Component {
	constructor() {
		super();
		this.state = {
			user: {
				name: 'Mateusz',
				surname: 'Wierzba'
			}
		}
	}

	logout() {
		//	TODO: logout
	}

	componentWillMount() {
		indexStore.on("USER_LOGIN", this.setUser)
	}

	setUser() {
		this.setState(() => {
			user: indexStore.getUser()
		})
	}

	openConfig() {
		//	TODO: open config
	}

	render() {
		const user = this.state.user;
		return (
			<div class="navbar-main-container">
				<div class="left-panel">
					<span>Witaj, {user.name}</span>
				</div>
				<div class="right-panel">
					<div class="options-container">
						<div class="option-item fa fa-cog" onClick={this.openConfig()}></div>
						<div class="option-item fa fa-power-off" onClick={this.logout()}></div>
					</div>
				</div>
			</div>
		);
	}
}