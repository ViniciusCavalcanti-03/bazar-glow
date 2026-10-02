import { useCartContext } from "../../Contexts/CartContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { catalogIndexById } from '../../utilitarios/catalog'

const CartItem = ({ id }) => {
    const { removeFromCart } = useCartContext()
    const { brand, price, name, image, size } = catalogIndexById[id]
    return (
        <article className="relative flex rounded-lg border bg-stone-100 p-1">
            <img src={image} alt={`imagem do produto ${id}, ${name}`} className="h-24" />
            <button
                onClick={() => removeFromCart(id)}
                aria-label="Remover do carrinho"
                className="absolute right-1 top-1 p-1 text-slate-950 hover:text-brand-700"
            >
                <FontAwesomeIcon icon={faXmark} />
            </button>
            <div className="mx-2 flex flex-col justify-around pr-6">
                <p className="text-sm text-slate-950">{name}</p>
                <p className="text-xs text-slate-400">{brand}</p>
                <p className="text-xs text-slate-400">{size}</p>
                <p className="text-lg text-green-700">R${price}</p>
            </div>
        </article>
    )
}

export default CartItem  