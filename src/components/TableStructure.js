import React from 'react';

const columnHeads = [
    "TRADE ID","STATUS","DATE","DIRECTION","CCYCCY",
    "DEALT CCY","NOTIONAL","RATE","VALUE DATE","TRADER"
]
const TableStructure = ({children}) => (
<div className='wrap'>
    <table className='head'>
        <tbody>
            <tr className='tableHeader'>
                {columnHeads.map(element => <td key={element}>{element}</td>)}
            </tr>
        </tbody>
    </table>
    <div className='innerTable'>
        <table>
            <tbody>
                {children}
            </tbody>
        </table>
    </div>
</div>
)
export default TableStructure;