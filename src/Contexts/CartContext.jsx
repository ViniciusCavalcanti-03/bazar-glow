import { createContext, useState,useContext } from "react"


export const CartContext = createContext(null)

export const useCartContext = () => useContext(CartContext)


export const getAmountOfItemsInCart = (cartItemsObj) => {
    let amount = 0
    for( const productId in cartItemsObj) {
        amount += cartItemsObj[productId]
    }
    return amount
}

const CartContextProvider = ({children}) => {
    const[isCartOpen,setIsCartOpen] = useState(false)
    const [cartItems,setCartItems] = useState({})

     const addToCart = (productId) => {
    const updatedCart = {
      ...cartItems, 
      [productId]: (cartItems[productId] ?? 0) + 1,
    }
    
    setCartItems(updatedCart)
  }
  const decraseUnit = (productId) => {
    if(cartItems[productId] > 1) {
      setCartItems({
        ...cartItems, 
        [productId]: cartItems[productId] - 1,
      })
     }
     else{
      removeFromCart(productId)
     } 
    }
  
  const toggleIsCartOpen = () => {
    setIsCartOpen(!isCartOpen)
  }
  
  const removeFromCart = (productId) => {
    const cartitemsCopy ={...cartItems}
    delete cartitemsCopy[productId]
    setCartItems(cartitemsCopy)
  }

    return (
        <CartContext.Provider
          value={{
              isCartOpen,
              toggleIsCartOpen,
              cartItems,
              addToCart,
              decraseUnit,
              removeFromCart
            }}
        >
         {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider