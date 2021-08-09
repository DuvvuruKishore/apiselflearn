import React from 'react';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TableBody from '@material-ui/core/TableBody';

function Body({table}) {
    return (
        <div>
        {table.map(({country,cases})=>(
            <tr>
                <td>{country}</td>
                <td>{cases}</td>
            </tr>
        ))}
        </div>
    )
}

export default Body
