import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { NavLink } from 'react-router-dom';
import { addCart, delCart } from '../redux/action';

const Cart = () => {
    const state = useSelector((state)=> state.handleCart)
    const dispatch = useDispatch()

    const handleAdd = (item) => {
        dispatch(addCart(item))
    }
    const handleDel = (item) => {
        dispatch(delCart(item))
    }

    const emptyCart = () => {
        return(
            <div>
                <div>
                    <div>
                        <h3>Your Cart is Empty</h3>
                    </div>
                </div>
            </div>
        )
    }
    const cartItems = (product) => {
        return(
            <>
                <div>
                <div>
                    <div>
                        <div>
                            <img src={product.image} alt={product.title} height="200px" width="180px" />
                        </div>
                        <div>
                            <h3>{product.title}</h3>
                            <p>
                                {product.qty} X ${product.price} = ${product.qty * product.price}
                            </p>
                            <button onClick={()=>handleDel(product)}>
                                <i className="fa fa-minus"></i>
                            </button>
                            <button onClick={()=> handleAdd(product)}>
                                <i className="fa fa-plus"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )

    }
    const buttons = () => {
        return(
            <>
                <div>
                    <div>
                        <NavLink to="/checkout">
                            Proceed to Checkout
                        </NavLink>
                    </div>
                </div>
            </>
        )
    }

    return (
        <div>
            {state.length === 0 && emptyCart()}
            {state.length !== 0 && state.map(cartItems)}
            {state.length !== 0 && buttons()}
        </div>
    );
}

export default Cart;