import dispatcher from './dispatcher';

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