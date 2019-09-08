import React, { Component } from 'react';
import DropzoneArea from './components/DropzoneArea';
import DatabaseViewer from './components/DatabaseViewer'
import { DBFileProvider } from './utils/FileContext';
import CircularProgress from '@material-ui/core/CircularProgress';

import './App.css'

class App extends Component {

	constructor( props ){
		super( props );
		this.state = { loading: false, fileUploaded: false, file: {} }
	}

	render(){
		let markup;

		if( this.state.loading ){
			markup = (
				<div className='loading-div'>
					<div className='lds-dual-ring'>
					</div>
				</div>
			);
		} else {
			if( this.state.fileUploaded ){
				markup = (
					<DatabaseViewer/>
				);
			} else {
				markup = (
					<div>
						<DropzoneArea setLoading={( value ) => (this.setLoading( value ))} setFileUploaded={( value ) => (this.setFileUploaded( value ))}/>
					</div>
				);
			}
		}

		return (
			<DBFileProvider value={this.state.file}>
				{markup}
			</DBFileProvider>
		)
	}

	setLoading( value ){
		this.setState( { loading: value } );
	}

	setFileUploaded( file ){
		this.setState( { fileUploaded: true, file: file } );
	}
}

export default App;
