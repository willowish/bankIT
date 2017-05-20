import {EventEmitter} from 'events';
import dispatcher from './dispatcher';

class IndexStore extends EventEmitter {
	constructor() {
		super();
	}

	export function loadMessages (messages) {
		this.emit('messagesLoaded', messages);
	}



}
const indexStore = new IndexStore();
export default indexStore;