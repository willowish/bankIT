import React from "react";
import IBAN from "iban";
import Tesseract from "tesseract.js";

export default class CameraOcr extends React.Component {
	constructor() {
		super();
		this.scanActive = 0;
		this.number = undefined;
	}
	
	componentDidMount() {
		this.video = document.getElementById('video');
		this.video = document.getElementById('canvas');
		
		// this.startCamera();
		this.start();
	}
	
	isValid(number) {
		console.log("'" + number + "'", IBAN.isValid("PL" + number) ? 'valid' : 'bad');
		return IBAN.isValid("PL" + number); // true
	}
	
	scanData() {
		this.scanActive++;
		Tesseract.recognize(this.video)
			.progress((p) => {
				console.log('progress', p);
			})
			.then((result) => {
				console.log('result', result);
				this.scanActive--;
				this.forceUpdate();
				this.tryToGetNumber(result);
			});
		this.forceUpdate();
	}
	
	scanCanvas() {
		this.scanActive++;
		Tesseract.recognize(this.canvas)
			.progress((p) => {
				console.log('progress', p);
			})
			.then((result) => {
				console.log('result', result);
				this.scanActive--;
				this.forceUpdate();
				this.tryToGetNumber(result);
			});
		this.forceUpdate();
	}
	
	tryToGetNumber(result) {
		result.lines.forEach(line => {
			let match = line.text.replace(/l/g, '1').match(/[0-9]+/g);
			if (!match) {
				return;
			}
			let number = match.reduce((val, item) => val += item + "");
			if (this.isValid(number)) {
				this.number = number;
				console.log('number!', number);
			}
		});
	}
	
	startCamera() {
		if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
			navigator.mediaDevices.getUserMedia({video: true}).then((stream) => {
				this.video.src = window.URL.createObjectURL(stream);
				this.video.play();
			});
		} else {
			console.error('I just cant do that');
		}
	}
	
	start() {
		
		this.img = new Image();
		this.img.crossOrigin = "anonymous";
		this.img.src = "./26.jpg";
		this.img.onload = () => {
			
			let canvas = document.getElementById('canvas');
			
			canvas.width = this.img.width;
			canvas.height = this.img.height;
			
			let ctx = canvas.getContext('2d');
			
			ctx.drawImage(this.img, 0, 0);
			
			let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
			let data = imageData.data;
			
			let red, green, blue, alpha;
			
			for (let i = 0; i < data.length; i += 4) {
				
				red = data[i];
				green = data[i + 1];
				blue = data[i + 2];
				alpha = data[i + 3];
				
				// skip transparent/semiTransparent pixels
				if (alpha < 200) {
					continue;
				}
				
				let hsl = this.rgbToHsl(red, green, blue);
				
				if (hsl.l > 0.1 || red > (green + red)) {
					let newRgb = this.hslToRgb(hsl.h, hsl.s, hsl.l);
					data[i] = 0;//newRgb.r;
					data[i + 1] = 0;//newRgb.g;
					data[i + 2] = 0;//newRgb.b;
					data[i + 3] = 0;
				}
			}
			ctx.putImageData(imageData, 0, 0);
		}
	}
	
	rgbToHsl(r, g, b) {
		r /= 255, g /= 255, b /= 255;
		var max = Math.max(r, g, b),
			min = Math.min(r, g, b);
		var h, s, l = (max + min) / 2;
		
		if (max == min) {
			h = s = 0; // achromatic
		} else {
			var d = max - min;
			s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
			switch (max) {
				case r:
					h = (g - b) / d + (g < b ? 6 : 0);
					break;
				case g:
					h = (b - r) / d + 2;
					break;
				case b:
					h = (r - g) / d + 4;
					break;
			}
			h /= 6;
		}
		
		return ({
			h: h,
			s: s,
			l: l,
		});
	}
	
	hslToRgb(h, s, l) {
		var r, g, b;
		
		if (s == 0) {
			r = g = b = l; // achromatic
		} else {
			function hue2rgb(p, q, t) {
				if (t < 0) {
					t += 1;
				}
				if (t > 1) {
					t -= 1;
				}
				if (t < 1 / 6) {
					return p + (q - p) * 6 * t;
				}
				if (t < 1 / 2) {
					return q;
				}
				if (t < 2 / 3) {
					return p + (q - p) * (2 / 3 - t) * 6;
				}
				return p;
			}
			
			var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
			var p = 2 * l - q;
			r = hue2rgb(p, q, h + 1 / 3);
			g = hue2rgb(p, q, h);
			b = hue2rgb(p, q, h - 1 / 3);
		}
		
		return ({
			r: Math.round(r * 255),
			g: Math.round(g * 255),
			b: Math.round(b * 255),
		});
	}
	
	render() {
		return (
			<div>
				<video id="video" width="640" height="480" autoPlay/>
				<canvas style={{display:'none'}} id="canvas" width="640" height="480"/>
				<br/>
				<button onClick={() => this.scanData()}>
					{this.scanActive ? 'Running...' : 'Scan camera'}
				</button>
				<button onClick={() => this.scanData()}>
					{this.scanActive ? 'Running...' : 'Scan image'}
				</button>
				{this.number?this.number:''}
			</div>
		);
	}
}
