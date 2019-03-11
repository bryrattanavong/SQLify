import React, { Component } from "react";
import Dropzone from "react-dropzone";
import styled from "styled-components";

const DropArea = styled.div`
	display: flex;
	align-items: center;
	text-align: center;
	margin: auto;
	width: 75%;
	height: 100px;
	border: 1px solid black;
	border-radius: 3px;
`;

export default class DropzoneArea extends Component {
	state = {};

	onDrop(){
		console.log( "hello" )
	}

	render(){
		return <Dropzone onDrop={this.onDrop}>
			{( { getRootProps, getInputProps } ) => {
				return (
					<DropArea {...getRootProps()} >
						<input {...getInputProps()} />
						<div style={{width:"100%"}}>
							Drop a db file here, or click to select files to
							upload a db file.
						</div>
					</DropArea>
				);
			}}
		</Dropzone>
	}
}

