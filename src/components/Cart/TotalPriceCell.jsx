

import { catalogIndexById } from "../../utilitarios/catalog"
import{useCartContext} from "../../Contexts/CartContext"
function CaulculateTotalPrice(cartObject){
    let price=0
    for(const cartItemId in cartObject ){
        price += catalogIndexById[cartItemId].price * cartObject[cartItemId]
     }
     return price
}

const TotalPriceCell = ({ variant = "default" }) => {
    const { cartItems } = useCartContext()
    const totalPrice = CaulculateTotalPrice(cartItems)

    if (variant === "cart") {
        return (
            <div className="flex items-baseline justify-between">
                <p className="text-lg font-semibold">Total</p>
                <p className="text-lg font-semibold">{`R$${totalPrice}`}</p>
            </div>
        )
    }

    return (
        <section className="flex justify-evenly rounded-md bg-slate-200 p-1 text-slate-950">
            <p>Total: </p>
            <p>{`R$${totalPrice}`}</p>
        </section>
    )
}

export default TotalPriceCell