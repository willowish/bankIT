import dispatcher from '../dispatcher';

export function openTransferWindow() {
	dispatcher.dispatch({type: 'NEW_TRANSFER'})
}

export function closeTransferWindow() {
	dispatcher.dispatch({type: 'CLOSE_TRANSFER_WINDOW'})
}