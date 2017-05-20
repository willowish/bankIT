import {EventEmitter} from "events";
import dispatcher from '../dispatcher';

class TransferStore extends EventEmitter {
	constructor() {
		super();
	}

	handleActions(action) {
		switch (action.type) {
			case 'NEW_TRANSFER': {
				transferStore.emit('NEW_TRANSFER');
				break;
			}
			case 'CLOSE_TRANSFER_WINDOW': {

				transferStore.emit('CLOSE_TRANSFER_WINDOW')
			}
		}
	}

}

const transferStore = new TransferStore();
dispatcher.register(transferStore.handleActions.bind(transferStore));
export default transferStore;
