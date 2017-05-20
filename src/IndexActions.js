import dispatcher from './dispatcher';
import axios from 'axios';

export function loadUser() {
	let fakeUser = {
		name: 'Mateusz',
		surname: 'Wierzba',
		id: 666
	};
	dispatcher.dispatch(
		{
			type: 'USER_LOADED',
			fakeUser
		}
	)
}

export function loadTransfers() {
	let transferList = getExampleTransfers();
	dispatcher.dispatch(
		{
			type: 'LOAD_TRANSFERS',
			transferList
		}
	)
}

export function loadAccounts() {
	let accountList = getExampleAccounts();
	dispatcher.dispatch(
		{
			type: 'LOAD_ACCOUNTS',
			accountList
		}
	)
}
export function loadMessages() {
	let messageList = getExampleMessages();
	dispatcher.dispatch(
		{
			type: 'LOAD_MESSAGES',
			messageList
		}
	)
}

export function performTransfer() {
	dispatcher.dispatch(
		{
			type: 'PERFORM_TRANSFER'
		}
	)
}

export function countSaldo() {
	let accountList = getExampleAccounts();
	dispatcher.dispatch(
		{
			type: 'LOAD_SALDO',
			accountList
		}
	)
}

export function loadLastBalance() {
	let transferList = getExampleTransfers();
	dispatcher.dispatch (
		{
			type: 'LOAD_LAST_BALANCE',
			transferList
		}
	)
}

export function load3Transfers() {
	let transferList = getExampleTransfers();
	dispatcher.dispatch (
		{
			type: 'LOAD_3_TRANSFERS',
			transferList
		}
	)
}

export function getBitcoinData() {
	axios.get('https://bitbay.net/API/Public/BTCPLN/trades.json?sort=desc')
		.then(function (response) {
    		console.log(response);
  			let bitCoinData = response;
  			dispatcher.dispatch(
  				{
  					type:'LOAD_BITCOIN_DATA',
  					bitCoinData
  				}
  			)
  			}
  		)
  		.catch(function (error) {
    			console.log(error);
  			}
  		);
}

function getExampleTransfers() {
	let exampleTransfers = [
		{
			title: 'Czynsz',
			income: false,
			sum: 500.00,
			date: '2017-05-20'
		},
		{
			title: 'Rachunek za telefon',
			income: false,
			sum: 75.00,
			date: '2017-05-18'
		},
		{
			title: 'Wypłata za kwiecień 2017',
			income: true,
			sum: 8000.00,
			date: '2017-05-10'
		},
		{
			title: 'Zakupy w Chrabo',
			income: false,
			sum: 25.49,
			date: '2017-05-8'
		},
		{
			title: 'Restauracja Smacznego',
			income: false,
			sum: 85.50,
			date: '2017-05-1'
		},
		{
			title: 'Za pizze',
			income: true,
			sum: 20.94,
			date: '2017-04-29'
		}
	];
	return exampleTransfers;
}

function getExampleAccounts () {
	let exampleAccounts = [
		{
			acc: 'Konto Oszczędnościowe',
			saldo: 14086.85
		},
		{
			acc: 'Lokata',
			saldo: 25000.00
		},
		{
			acc: 'Konto inwestycyjne',
			saldo: 5000.00
		}
	];
	return exampleAccounts;
}
function getExampleMessages() {
	let exampleMessages = [
		{
			subject: 'Promocja kredytu',
			body: 'Super specjalna oferta kredytu czeka na Ciebie. Sprawdź w ...'
		},
		{
			subject: 'Aktualizacja regulaminu',
			body: 'Następujące punkty regulaminu ulegają zmianie z dniem...'
		},
		{
			subject: 'Promocja kredytu',
			body: 'Super specjalna oferta kredytu czeka na Ciebie. Sprawdź w ...'
		}
	];
	return exampleMessages;
}