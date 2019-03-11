import React, { Component } from "react";
import Dropzone from "react-dropzone";
import styled from "styled-components";

export default class DropzoneArea extends Component {
	state = {};
	render(){
		return (
			<div>
				<Dropzone onDrop={this.onDrop}>
					{( { getRootProps, getInputProps } ) => {
						return (
							<div {...getRootProps()} >
								<input {...getInputProps()} />
								<p style={{textAlign:"center"}}>
									Try dropping some files here, or click to select files to
									upload.
								</p>
							</div>
						);
					}}
				</Dropzone>
			</div>
		)
	}
}

