import React, { Component } from 'react';
import DropzoneArea from "./components/DropzoneArea";

class App extends Component {
	render(){
		return (
			<div>
				<h1 style={{ textAlign: "center", paddingBottom: "20px" }}>SQLify</h1>
				<DropzoneArea/>
			</div>
		);
	}
}

export default App;
