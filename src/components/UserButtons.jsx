import { useState } from "react";
import { useCartContext, getAmountOfItemsInCart} from "../Contexts/CartContext";
import{FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping, faUser} from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
const UserButtons = () => {
    const {toggleIsCartOpen, cartItems} = useCartContext()
    const amountOfItems = getAmountOfItemsInCart(cartItems)
    return (
    <div>
        <button className="px-2 relative" onClick={toggleIsCartOpen} > 
            <FontAwesomeIcon icon = {faCartShopping} />
           {!!amountOfItems && (
             <div
              id="cart-amount"
              className="absolute inline-flex items-center justify-center w-6 h-6 font-bold text-white bg-red-600 border-2 rounded-full -top-3 -right-2 text-sm">
              {amountOfItems}
             </div>
            )}
        </button>
    </div>)

};

export default UserButtons 