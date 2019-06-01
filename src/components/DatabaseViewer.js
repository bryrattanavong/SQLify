import React, { Component } from "react";
import styled from "styled-components";
import TableView from "./TableView";
import DataView from "./DataView";

const DatabaseView = styled.div`
	display: flex;
	align-items: center;
	text-align: center;
	margin: auto;
	margin-top:10px;
	width: 95%;
	height: 90vh;
	border: 1px solid black;
	border-radius: 3px;
`;


export default class DatabaseViewer extends Component {
	   
	constructor(props){
		super(props);
		this.state = {table: ''};
	}
	render(){
		return (
			<DatabaseView>
				<TableView onClick={(name) => this.onClick(name)}/>
				<DataView table={this.state.table}/>
			</DatabaseView>
        );
	}

	onClick(name) {
		console.log(name);
		this.setState({table: name});
	}
}
