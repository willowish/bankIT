import dispatcher from '../dispatcher';

export function openTransferWindow() {
	dispatcher.dispatch({type: 'NEW_TRANSFER'})
}