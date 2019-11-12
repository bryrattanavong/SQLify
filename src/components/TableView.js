import React, { Component, useState, useEffect, useContext } from "react";
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

const TablesView = styled.div`
  min-height: 100%;
`;

export default (props) => {
    const [rows, setRows] = useState([]);
    const [mounted, setMounted] = useState(false);
    const context = useContext(FileContext);

    useEffect(() => {
        if(!mounted) {
            const object = SQL.getTableNamesAndRows(context);

            let id = 0;
            let tempRows = [];
            for( let key in object ){
                id += 1;
                tempRows.push( { id: id, name: key, count: object[key] } );
            }
            setRows(tempRows);
            setMounted(true);
        }
      }, []);

      return (
        <TablesView>
        	<Paper>
        		<Table>
        			<TableHead>
        				<TableRow>
        					<TableCell>Table Name</TableCell>
        					<TableCell align="right">Number of Rows</TableCell>
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
        </TablesView>
      );
}
