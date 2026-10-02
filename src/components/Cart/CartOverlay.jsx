import { useCartContext } from "../../Contexts/CartContext"
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import CartProducts from "./CartProducts"
import TotalPriceCell from "./TotalPriceCell"
import { Link } from "react-router-dom"

const CartOverlay = () =>{
    const {toggleIsCartOpen,isCartOpen} = useCartContext()
    return (
        <div className={`h-screen w-screen fixed top-0 left-0 flex justify-end z-50 transition-transform duration-300 ease-in-out ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <section id="Outside-of-cart" onClick={toggleIsCartOpen} className="hidden sm:block flex-1 bg-slate-950 opacity-50"></section>
            <section id="Cart" className="w-full sm:w-96 bg-white sm:border-l-4 border-gray-200 p-5 flex flex-col justify-between text-slate-950" >
                <div className=" flex justify-between border-b border-gray-200 px-4 py-2"> 

                    <p>Meu carrinho</p>
                    <button onClick={toggleIsCartOpen}>
                        <FontAwesomeIcon icon={faCircleXmark}/>
                    </button>
                </div>
                <CartProducts />
                <TotalPriceCell />
                <Link to="/checkout" className="bg-brand-600 text-white rounded-sm p-1 hover:bg-brand-700 text-center">Finalizar compra</Link>
            </section>
            

        </div>
    )
}
 
export default CartOverlay