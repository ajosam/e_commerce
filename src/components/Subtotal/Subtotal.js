import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../../StateProvider'
import { getBasketTotal } from '../../Reducer/Reducer';

function Subtotal() {

    const [{basket}] = useStateValue();

    return (
        <div className='subtotal'>
            <h1>Subtotal</h1>
            <CurrencyFormat
            renderText={(value)=>(
                <>
                    <p>Subtotal ({basket.length} items):<strong>{`${getBasketTotal(basket)}`}</strong></p>
                    <small className='subtotal__gift'>
                        <input type="checkbox" />This order contains gift card
                    </small>
                </>
            )}

            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"₹"}
             />
            <button>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal
