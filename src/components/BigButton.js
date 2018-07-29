import React from 'react';

const BigButton = ({name,rate,sellingPrice}) => (
    <button className='bigButton'>
        <div className='bigButton__action'>
            <span className='bigButton__action__type'>{name}</span>
            <span className='bigButton__action__rate'>{rate}</span>
        </div>
        <div className='bigButton__price'>{sellingPrice}</div>
    </button>
)

export default BigButton;