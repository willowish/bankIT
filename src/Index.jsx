import React from "react";
import LoadingBar from "./loadingBar/LoadingBar";
import CameraOcr from './CameraOcr/CameraOcr';

export default class Index extends React.Component {
	constructor() {
		super();
	}
	
	render() {
		return (
			<div>
				<LoadingBar/>
				<br/>
				<CameraOcr/>
			</div>
		);
	}
}
