import React, {  useState } from "react";
import styled from "styled-components";
import SQLOperations from "../utils/sqlOperations";
import { FileContext } from "../utils/FileContext";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const SQL = SQLOperations;

const DatasView = styled.div`
  height: 100%;
`;

export default (props) => {
	const [rows, setRows] = useState([]);
	const [columnNames, setColumnNames] = useState([]);

	//Need to get data from the this.props.table and render it

	const createColumnJSX = () => {
		return columnNames.map( column => (
			<div>
				<TableCell>{column}</TableCell>
			</div>
		) )
	}

	const createRowJSX = () => {

	}

		return (
			<DatasView>
				<Paper>
					<Table>
						<TableHead>
							<TableRow>
								{createColumnJSX}
							</TableRow>
						</TableHead>
						<TableBody>
							{rows.map( row => (
								<TableRow key={row.id} onClick={() => props.onClick( row.name )}>
									<TableCell component="th" scope="row">
										{row.name}
									</TableCell>
									<TableCell align="right">{row.count}</TableCell>
								</TableRow>
							) )}
						</TableBody>
					</Table>
				</Paper>
			</DatasView>
		);
	}

DataView.contextType = FileContext;
