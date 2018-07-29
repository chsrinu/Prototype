import React from 'react';
import BigButton from './BigButton';
import profitIndication from '../../images/arrow-up.png';
import lossIndication from '../../images/arrow-down.png';

//var tempImage = require('');

const BondCard = ({bondInfo, onClick}) => {
 const {CCYCCY, LEFTSELL,RATE, PNL, RIGHTBUY, DEALTCCY, NOTIONAL, VALUE_DATE} = bondInfo
 var profit = RIGHTBUY-LEFTSELL;
 return(
        <div className='cardContainer' onClick={onClick}>
            <h1 className='cardContainer__currencyHeader'>{CCYCCY}</h1>
            <div className='cardContainer__userActions'>
                <BigButton name={'SELL'} rate={RATE} sellingPrice = {LEFTSELL}/>
                <div className='cardContainer__PNL'>
                  {profit>0 && <img className='imageProperties' src={profitIndication} />}
                    <span>{PNL}</span>
                  {profit<0 && <img className='imageProperties' src={lossIndication} />}
                </div>
                <BigButton name={'BUY'} rate={RATE} sellingPrice = {RIGHTBUY}/>
            </div>
            <div className='cardContainer__tradeDetails'>
                <span>{DEALTCCY}   {NOTIONAL}</span>
                <span>{VALUE_DATE}</span>
            </div>
    </div>
)
}
export default BondCard;