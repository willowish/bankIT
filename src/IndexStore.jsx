import {EventEmitter} from 'events';

class IndexStore extends EventEmitter {
	constructor() {
		super();

	}

}
const indexStore = new IndexStore();
export default indexStore;