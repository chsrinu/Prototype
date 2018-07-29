import React from 'react';
import TableStructure from './TableStructure';
import bondData from '../data/bondData.json';

const BondTable = () => {
    return (
        <TableStructure>
            {bondData.map(element => <tr key={element.TRADE_ID}><td>{element.TRADE_ID}</td>
                                                    <td>{element.STATUS}</td>
                                                    <td>{element.DATE}</td>
                                                    <td>{element.DIRECTION}</td>
                                                    <td>{element.CCYCCY}</td>
                                                    <td>{element.DEALTCCY}</td>
                                                    <td>{element.NOTIONAL}</td>
                                                    <td>{element.RATE}</td>
                                                    <td>{element.VALUE_DATE}</td>
                                                    <td>{element.TRADER}</td>
                                    </tr>)}
        </TableStructure>
    )
}
export default BondTable;