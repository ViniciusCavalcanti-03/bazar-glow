import { useCartContext } from "../../Contexts/CartContext"
import CartItem from "./cartItem"
import SimpleCartItem from "./SimpleCartItem"

const CartProducts = ({isHomePage = true}) => {
    const {cartItems} = useCartContext()
    const cartItemsArray = []
    for(const itemId in cartItems){
        cartItemsArray.push({id: Number(itemId),amount: cartItems[itemId]})
    }

    return (
    <section className={`flex flex-col justify-start gap-2 overflow-auto ${isHomePage ? "min-h-0 flex-1 px-5 py-4" : ""}`}>
        {cartItemsArray.map((product) => {
          return isHomePage? <CartItem {...product} key={`key_${product.id}`}/> : <SimpleCartItem {...product} key={`key_${product.id}`}/>

        })}
    </section>
    )
}

export default CartProducts