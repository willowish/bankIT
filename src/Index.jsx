import React from 'react';
import LoadingBar from './loadingBar/LoadingBar'

export default class Index extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (<div><h1><LoadingBar/></h1></div>);
	}
}