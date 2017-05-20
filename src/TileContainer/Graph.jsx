import React from 'React';
import vis from 'vis';
import IndexStore from '../IndexStore';

let items = [];

export default class Graph extends React.Component {
	constructor () {
		super();
	}

	onComponentMount() {

	}

	prepareGraph() {
		var container = document.getElementById('graph');
  		bitcoinData.forEach(addToItems);
	  	var dataset = new vis.DataSet(items);
		var graph2d = new vis.Graph2d(container, dataset);
		return graph2d;
	}

	addToItems(item, index) {
		var date = new Date(item.date*1000);
  		var value = item.price;
  		items.push({x: date, y: value})
	}

	render() {
		return (<div id="graph"></div>)
	}
}