import React from 'react';
import data from '../data/bondData.json';
import BondCard from './BondCard';

const onClick = (cardId) => {
    console.log('some card is clicked',cardId);
}
const BondGrid = () => {
    return (
        <div className='bondGrid'>
            {data.map(element =><BondCard onClick={() => onClick(element.TRADE_ID)} key={element.TRADE_ID} bondInfo={element} />)}
        </div>
    )
}
export default BondGrid;