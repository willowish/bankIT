import {EventEmitter} from 'events';
import dispatcher from './dispatcher';

let eventMap = []
let userName = '';

class NavBarStore extends EventEmitter {
	constructor() {
			super();
			eventMap = getEventsMap();
		}

		handleActions(action) {
			if (eventMap[action]) {
				eventMap[action]();
			}
		}
	}

	getUserName() {
		return userName;
	}
};

let getEventsMap = () => {
	return {
		'logOut': logOut,
		'displaySettings': displaySettings,
		'displayUserGreeting': displayUserGreeting
	}
};

let logOut = () => {
	this.emit('logOut');
};

let displaySettings = () => {
	this.emit('displaySettings');
};

let displayUserGreeting = (username) {
	this.username = username;
	this.emit('displayUserGreeting');
};

const navBarStore = new NavBarStore();
export default navBarStore;

dispatcher.register(navBarStore.handleActions.bind(navBarStore));