import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartPlus } from "@fortawesome/free-solid-svg-icons"
import { useCartContext } from "../../Contexts/CartContext"
import ImageLightbox from "./ImageLightbox"

const ProductCard = ({id,brand,name,price,image,images,extra,size}) =>{
    const {addToCart} = useCartContext()
    const [isImageOpen, setIsImageOpen] = useState(false)
    const gallery = images?.length ? images : [image]

    return(
    <article className=" card-produto group w-full md:w-48 bg-stone-100 shadow-xl shadow-slate-200 flex flex-col justify-around border-2 border-gray-200 rounded-lg">
        <img
            src={image}
            alt={`imagem do produto ${id}`}
            onClick={() => setIsImageOpen(true)}
            className="cursor-pointer group-hover:scale-110 rounded-lg mx-2 md:mx-4 my-3 transition duration-300"
        />
        <p className="mx-2 md:mx-4 text-sm ">{name}</p>
        <p className="mx-2 md:mx-4 text-sm text-slate-500 ">{brand}</p>
        <p className="mx-2 md:mx-4 text-sm text-slate-500 ">{size}</p>
        <p className="mx-2 md:mx-4 text-sm text-green-700 ">R${price}</p>
        <button className="bg-pink-600 rounded-md mx-4 my-1 text-slate-100 hover:bg-pink-700" onClick={() => addToCart(id)}>
            <FontAwesomeIcon icon={faCartPlus}/>
        </button>
        {isImageOpen && (
            <ImageLightbox images={gallery} alt={name} onClose={() => setIsImageOpen(false)} />
        )}
    </article>
    )
}

export default ProductCard  