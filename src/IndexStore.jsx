import {EventEmitter} from 'events';
import dispatcher from './dispatcher';
let eventMap = [];
let messages = [];
let accounts = [];
let transfers = [];
let bitcoinData = [];
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

	getBitcoinData() {
		return bitcoinData;
	}
}

let getEventsMap = () => {
	return {
		'messagesLoaded': loadMessages,
		'accountsLoaded': loadAccounts,
		'transfersLoaded': loadTransfers,
		'saldoLoaded': loadSaldo,
		'threeTransfersLoaded': load3Transfers,
		'lastBalanceLoaded': loadLastBalance,
		'getBitcoinData': getBitcoinData
	}
};

let loadMessages = (msg) => {
	messages = msg;
	this.emit('MESSAGES_LOADED');
};

let loadAccounts = (accountList) => {
	accounts = accountList;
	this.emit('ACCOUNTS_LOADED');
};

let loadTransfers = (tr) => {
	transfers = tr;
	this.emit('TRANSFERS_LOADED');
};

let loadSaldo = (accountList) => {
	saldo = accountList.reduce((prev, item) => prev + item.saldo, 0);
	this.emit('SALDO_LOADED');
};

let load3Transfers = (transfers) => {
	first3Transfers = transfers.slice(0, 3);
	this.emit('THREE_TRANSFERS_LOADED');
};

let loadLastBalance = (transfers) => {
	lastBalance =
		transfers.slice(0, 3)
			.reduce((prev, item) => prev + (item.income ? item.sum : -item.sum), 0);
	this.emit('LAST_BALANCE_LOADED');
};

let getBitcoinData = (bitcoinData) =>{
	this.bitcoinData= bitcoinData;
	this.emit('BITCOIN_DATA_LOADED');
}


const indexStore = new IndexStore();
export default indexStore;

dispatcher.register(indexStore.handleActions.bind(indexStore));