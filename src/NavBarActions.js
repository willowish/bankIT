import dispatcher from './dispatcher';

export function displaySettings() {
	dispatcher.dispatch(
		{

			type: 'DISPLAY_SETTINGS'
		}
	)
}

export function logOut() {
	dispatcher.dispatch(
		{
			type: 'LOG_OUT'
		}
	)
}

export function displayUserGreeting() {
	let userName = 'Marcin';
	dispatcher.dispatch(
		{
			type: 'DISPLAY_USER_GREETING',
			userName
		}
	);
}