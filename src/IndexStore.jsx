import {EventEmitter} from 'events';
import dispatcher from './dispatcher';
let eventMap = [];
let messages = [];
let accounts = [];
let transfers = [];
let first3Transfers = [];
let saldo = 0.0;
let lastBalance = 0.0;
class IndexStore extends EventEmitter {

	constructor() {
		super();
		eventMap = getEventsMap();
	}

	handleActions(action) {
		if (eventMap[action]) {
			eventMap[action]();
		}
	}

	getAccounts() {
		return accounts;
	}

	getMessages() {
		return messages;
	}

	getTransfers() {
		return transfers;
	}

	getFirst3Transfers() {
		return first3Transfers;
	}

	getSaldo() {
		return saldo;
	}

	getLastBalance() {
		return lastBalance;
	}

}

let getEventsMap = () => {
	return {
		'messagesLoaded': loadMessages,
		'accountsLoaded': loadAccounts,
		'transfersLoaded': loadTransfers,
		'saldoLoaded': loadSaldo,
		'threeTransfersLoaded': load3Transfers,
		'lastBalanceLoaded': loadLastBalance
	}
};

let loadMessages = (msg) => {
	messages = msg;
	this.emit('messagesLoaded');
};

let loadAccounts = (accountList) => {
	accounts = accountList;
	this.emit('accountsLoaded');
};

let loadTransfers = (tr) => {
	transfers = tr;
	this.emit('transfersLoaded');
};

let loadSaldo = (accountList) => {
	saldo = accountList.reduce((prev, item) => prev + item.saldo, 0);
	this.emit('saldoLoaded');
};

let load3Transfers = (transfers) => {
	first3Transfers = transfers.slice(0, 3);
	this.emit('threeTransfersLoaded');
};

let loadLastBalance = (transfers) => {
	lastBalance =
		transfers.slice(0, 3)
			.reduce((prev, item) => prev + (item.income ? item.sum : -item.sum), 0);
	this.emit('lastBalanceLoaded');
};


const indexStore = new IndexStore();
export default indexStore;

dispatcher.register(indexStore.handleActions.bind(indexStore));