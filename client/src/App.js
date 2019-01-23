import React, {	Component } from "react";
import Monitor from "./monitor";
// import logo from './logo.svg';
import "./App.css";

import AppRouter from "./AppRouter";

class App extends Component {
	// constructor(props) {
	// 	super(props);

	// 	this.timer = null;
	// }

	componentDidMount() {
		// Monitor();
		if (Notification.permission !== "denied") {
			Notification.requestPermission().then(function (permission) {
			  // If the user accepts, let's create a notification
			//   if (permission === "granted") {
			// 	var notification = new Notification("Hi there!");
			// 	notification.onclick = function(event) {
			// 		event.preventDefault(); // prevent the browser from focusing the Notification's tab
			// 		console.log('xxx');
			// 		window.open('http://www.mozilla.org', '_blank');
			// 	  }
			//   }
			});
		}

		function notify () {
			var options = {
				body: "theBody",
				requireInteraction: true,
				icon: 'data:image/png;base64,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'
			}
			// var notification = new Notification("", options);
			// notification.onclick = function(event) {
			// 	event.preventDefault(); // prevent the browser from focusing the Notification's tab
			// 	console.log('xxx Notification');
			// 	window.open('https://www.bing.com?from=alexqin', '_blank');
			//   }
			// notification.onclose = function (event) {
			// 	alert("onClose!");
			// 	event.preventDefault(); 
			// 	console.log('Notification clicked.');
			// }
			var notification = new Notification('Notification title', options);
			// notification.onclick = function (event) {
			// 	event.preventDefault(); 
			// 	window.open('https://www.bing.com?from=alexqin', '_blank');
			// 	console.log('Notification onclick clicked.');
			// } 
			notification.onclick = event => {
				console.log('onclick');
				event.preventDefault();
				window.focus();
				window.location.href = 'http://localhost:3001?from=alexqin';
			};
			notification.onclose = function (event) {
				event.preventDefault(); 
				console.log('Notification onclose clicked.');
			} 
			window.addEventListener('beforeunload', function (event) {
				event.preventDefault();
				console.log('beforeunload');
			});
			var t = setTimeout(notify, 5000);
			console.log(t, 'setTimeout');

			// this.timer = t;
		}

		notify();
	}

	componentWillUnmount() {
		console.log('componentWillUnmount');
		// window.clearTimeout(this.timer);
	}

	render() {
		return <AppRouter /> ;
	}
}

export default App;
