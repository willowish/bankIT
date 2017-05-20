import {EventEmitter} from "events";
import dispatcher from '../dispatcher';
let eventMap = [];

class TransferStore extends EventEmitter {
	constructor() {
		super();
		eventMap = getActionsHandlers();
	}

	handleActions(action) {
		if (action.type =='NEW_TRANSFER') {
			console.log('Emituhje', this.emit);
			this.emit("window");
		}
	}

}

let getActionsHandlers = () => {
	return {
		'NEW_TRANSFER': newTransfer
	}
};

let newTransfer = function(){
	console.log('Emituhje', this);
	transferStore.emit('openWindow');
};

const transferStore = new TransferStore();
dispatcher.register(transferStore.handleActions.bind(transferStore));
export default transferStore;
