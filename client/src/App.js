import React, {	Component } from "react";
import Monitor from "./monitor";
// import logo from './logo.svg';
import "./App.css";

import AppRouter from "./AppRouter";

class App extends Component {
	componentDidMount() {
		Monitor();
	}
	render() {
		return <AppRouter /> ;
	}
}

export default App;
