import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartPlus } from "@fortawesome/free-solid-svg-icons"
import { useCartContext } from "../../Contexts/CartContext"
import { useToast } from "../../Contexts/ToastContext"   // 1. novo import
import ImageLightbox from "./ImageLightbox"

const ProductCard = ({id,brand,name,price,image,images,extra,size}) =>{
    const { addToCart, cartItems } = useCartContext()      // 2. troca a linha antiga (agora com cartItems)
    const { showToast } = useToast()                       //    nova linha
    const [isImageOpen, setIsImageOpen] = useState(false)
    const gallery = images?.length ? images : [image]

    // 3. nova função, antes do return
    const handleAdd = () => {
        if (cartItems[id]) {
            showToast("Não é possível adicionar duas ou mais peças iguais no carrinho!!!", "warning", 3500)
            return
        }
        addToCart(id)
        showToast("Item adicionado ao carrinho ✅", "success", 1500)
    }

    return(
    <article className="group flex w-full flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg md:w-52">
    <div
        className="aspect-[3/4] cursor-zoom-in overflow-hidden bg-stone-100"
        onClick={() => setIsImageOpen(true)}
    >
        <img
            src={image}
            alt={`imagem do produto ${id}`}
            loading="lazy"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
    </div>

    <div className="flex flex-1 flex-col gap-1 p-3">
        <p className="line-clamp-2 text-sm font-medium text-stone-800">{name}</p>
        <p className="text-xs text-stone-500">{brand} · {size}</p>
        <p className="mt-auto pt-2 text-lg font-semibold text-brand-700">R${price}</p>
        <button
            onClick={handleAdd}                            // 4. era onClick={() => addToCart(id)}
            className="mt-2 flex items-center justify-center gap-2 rounded-full bg-brand-600 py-2 text-sm font-medium text-white transition hover:bg-brand-700 active:scale-95"
        >
            <FontAwesomeIcon icon={faCartPlus} /> Adicionar
        </button>
    </div>

    {isImageOpen && (
        <ImageLightbox images={gallery} alt={name} onClose={() => setIsImageOpen(false)} />
    )}
</article>
    )
}

export default ProductCard  