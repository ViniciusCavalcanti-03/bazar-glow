import { useCartContext } from "../../Contexts/CartContext"
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import CartProducts from "./CartProducts"
import TotalPriceCell from "./TotalPriceCell"
import { Link } from "react-router-dom"

const CartOverlay = () =>{
    const {toggleIsCartOpen,isCartOpen} = useCartContext()
    return (
    <div className={`fixed top-0 left-0 z-50 flex h-dvh w-screen justify-end transition-transform duration-300 ease-in-out ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <section id="Outside-of-cart" onClick={toggleIsCartOpen} className="hidden sm:block flex-1 bg-slate-950 opacity-50"></section>

        <section id="Cart" className="flex w-full flex-col border-gray-200 bg-white text-slate-950 sm:w-96 sm:border-l-4">
            <div className="mx-5 mt-5 flex justify-between border-b border-gray-200 px-4 py-2">
                <p>Meu carrinho</p>
                <button onClick={toggleIsCartOpen}>
                    <FontAwesomeIcon icon={faCircleXmark} />
                </button>
            </div>

            <CartProducts />

            <div className="border-t border-stone-200 bg-white px-5 pb-5 pt-4 shadow-[0_-6px_16px_rgba(0,0,0,0.06)]">
                <TotalPriceCell variant="cart" />
                <Link
                    to="/checkout"
                    className="mt-3 block rounded-full bg-brand-600 py-3 text-center font-semibold text-white transition hover:bg-brand-700"
                >
                    Finalizar compra
                </Link>
            </div>
        </section>
    </div>
)
}
 
export default CartOverlay