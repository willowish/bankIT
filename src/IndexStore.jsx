import {EventEmitter} from 'events';
import dispatcher from './dispatcher';

class IndexStore extends EventEmitter {
	export var messages = [];
	export var accounts = [];
	export var transfers = [];
	export var first3Transfers = [];
	export var saldo = 0.0;
	export var lastBalance = 0.0;

	constructor() {
		super();
	}

	export function loadMessages (messages) {
		this.messages = messages;
		this.emit('messagesLoaded');
	}

	export function loadAccounts (accountList) {
		this.accounts = accountList;
		this.emit('accountsLoaded');
	}

	export function loadTransfers (transfers) {
		this.transfers = transfers;
		this.emit('transfersLoaded');
	}

	export function loadSaldo (accountList) {
		this.saldo = accountList.reduce((prev,item)=>prev+item.saldo, 0);
		this.emit('saldoLoaded');
	}

	export function load3Transfers (transfers) {
		this.first3Transfers = transfers.slice(0,3);
		this.emit('threeTransfersUpdated');
	}

	export function loadLastBalance (transfers) {
		this.lastBalance = transfers.slice(0,3).reduce((prev,item)=>prev+(item.income? item.sum:-item.sum), 0);
		this.emit('lastBalanceLoaded');
	}
}
const indexStore = new IndexStore();
export default indexStore;