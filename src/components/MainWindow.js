import React from 'react';
import BondGrid from './BondGrid';
import BondTable from './BondTable';

const MainWindow = (
    <div className='mainWindowContainer'>
        <div className='grid'>
            <BondGrid />
        </div>
        <div className='table'>
            <BondTable />
        </div>
    </div>
);
export default MainWindow;