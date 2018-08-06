import React from 'react';
import BigButton from './BigButton';
import profitIndication from '../../images/arrow-up.png';
import lossIndication from '../../images/arrow-down.png';


const BondCard = ({bondInfo,onClick, bondCancel}) => {
 const {CCYCCY, LEFTSELL,RATE, PNL, RIGHTBUY, DEALTCCY, NOTIONAL, VALUE_DATE} = bondInfo
 var profit = RIGHTBUY-LEFTSELL;
 return(
        <div className='cardContainer' onClick={onClick}>
            <div className='cardContainer__currencyHeader'>
                <h1 className='cardContainer__currencyHeaderTextStyle'>{CCYCCY}</h1>
                <img className='imageProperties' onClick={bondCancel} src={profitIndication}/>
            </div>
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