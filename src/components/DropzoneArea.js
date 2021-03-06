import React from "react";
import Dropzone from "react-dropzone";
import styled from "styled-components";

const DropArea = styled.div`
	display: flex;
	align-items: center;
	text-align: center;
	margin: auto;
	margin-top: 10px;
	width: 75%;
	height: 100px;
	border: 1px solid black;
	border-radius: 3px;
`;


export default ( props ) => {

	const onDrop = async ( content ) => {
		props.setLoading( true );
		const readUploadedFile = file => {
			return new Promise( ( resolve, reject ) => {
				const fr = new FileReader();
				fr.onload = () => resolve( fr.result );
				fr.readAsArrayBuffer( file );
			} );
		};

		const readFile = await readUploadedFile( content[0] );
		props.setLoading( false );
		props.setFileUploaded( readFile );
	};

	return <Dropzone onDrop={onDrop} multiple={false}>
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

