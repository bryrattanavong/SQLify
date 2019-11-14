import React, { useState, useContext } from "react";
import styled from "styled-components";
import TableView from "./TableView";
import DataView from "./DataView";
import SQLOperations from "../utils/sqlOperations";
import { FileContext } from "../utils/FileContext";

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


export default () => {
	const [table, setTable] = useState( '' );
	const context = useContext(FileContext);
	const onClick = ( name ) => {
		setTable( name );
		SQLOperations.getDataFromTable(context, name)
	};
	return (
		<DatabaseView>
			<TableView onClick={( name ) => onClick( name )}/>
			<DataView table={table}/>
		</DatabaseView>
	);
}
