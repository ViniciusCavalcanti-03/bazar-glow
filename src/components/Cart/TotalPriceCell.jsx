

import { catalogIndexById } from "../../utilitarios/catalog"
import{useCartContext} from "../../Contexts/CartContext"
function CaulculateTotalPrice(cartObject){
    let price=0
    for(const cartItemId in cartObject ){
        price += catalogIndexById[cartItemId].price * cartObject[cartItemId]
     }
     return price
}

const TotalPriceCell = () => {
    const{cartItems} = useCartContext()
    const totalPrice = CaulculateTotalPrice(cartItems)
    return(
        <section className="flex bg-slate-200 p-1 text-green-700 rounded-md justify-evenly ">
            <p>Total: </p>
            <p>{`R$${totalPrice}`}</p>
            
        </section>
    )
}

export default TotalPriceCell