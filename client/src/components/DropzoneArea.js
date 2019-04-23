import React, { Component } from "react";
import Dropzone from "react-dropzone";
import styled from "styled-components";
import axios from "axios";

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

	onDrop = async ( content ) => {
		const readUploadedFile = file => {
			return new Promise( ( resolve, reject ) => {
				const fr = new FileReader;
				fr.onload = () => resolve( fr.result );
				fr.readAsBinaryString( file );
			} );
		};
		const readFile = await readUploadedFile( content[0] );
		const dataPost = await axios.post( "http://localhost:80/readDBFile", readFile );
	};

	render(){
		return <Dropzone onDrop={this.onDrop} multiple={false}>
			{( { getRootProps, getInputProps } ) => {
				return (
					<DropArea {...getRootProps()} >
						<input {...getInputProps()} />
						<div style={{ width: "100%" }}>
							Drop a .db file here, or click to select files to
							upload a .db file.
						</div>
					</DropArea>
				);
			}}
		</Dropzone>
	}
}

