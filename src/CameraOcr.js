export default class CameraOcr {
	
	constructor() {
	
	}
	
	scanNumber() {
	
	}
	
	scanData() {
	
	}
	
	startCamera() {
		
		var video = document.getElementById('video');
		
		if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
			navigator.mediaDevices.getUserMedia({video: true}).then(function (stream) {
				video.src = window.URL.createObjectURL(stream);
				video.play();
			});
		}
		
	}
	
	convertCanvasToImage(canvas) {
		var image = new Image();
		image.src = canvas.toDataURL("image/png");
		return image;
	}
}
