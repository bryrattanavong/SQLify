import React, { Component } from 'react';
import DropzoneArea from "./components/DropzoneArea";
import './App.css';

class App extends Component {
	render(){
		return (
			<div>
				<h1 style={{ textAlign: "center" }}>SQLify</h1>
				<DropzoneArea/>
			</div>
		);
	}
}

export default App;
