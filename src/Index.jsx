import React from "react";
import LoadingBar from "./loadingBar/LoadingBar";
import CameraOcr from './CameraOcr';

export default class Index extends React.Component {
	constructor() {
		super();
		
		
		
	}
	componentDidMount(){
		let cameraOcr = new CameraOcr();
		cameraOcr.startCamera();
	}
	
	render() {
		return (
			<div><h1><LoadingBar/></h1>
				<br/>
				<video id="video" width="640" height="480" autoPlay></video>
				<canvas id="canvas" width="640" height="480"></canvas>
			</div>
		);
	}
}
