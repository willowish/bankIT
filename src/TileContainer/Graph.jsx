import React from 'React';
import vis from 'vis';
import IndexStore from '../IndexStore';

let items = [];

export default class Graph extends React.Component {
	constructor () {
		super();
	}

	onComponentMount() {
		IndexStore.on('BITCOIN_DATA_LOADED', this.prepareGraph());
	}

	prepareGraph() {
		var container = document.getElementById('graf');
  		bitcoinData.forEach(addToItems);
	  	var dataset = new vis.DataSet(items);
		var graph2d = new vis.Graph2d(container, dataset);
	}

	addToItems(item, index) {
		var date = new Date(item.date*1000);
  		var value = item.price;
  		items.push({x: date, y: value})
	}

	render() {
		return (<div id="graf"></div>)
	}
}