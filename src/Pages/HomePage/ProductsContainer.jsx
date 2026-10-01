import { catalog } from "../../utilitarios/catalog"
import ProductCard from "./ProductCard"
const ProductsContainer = ({searchParams}) =>{
   return( <section className="grid grid-cols-2 gap-3 px-3 py-6 md:container md:flex md:flex-wrap md:mx-auto md:p-10 md:justify-center md:gap-10">
        {(searchParams.get('filterby') !== null ? catalog.filter(p => p.extra === (searchParams.get('filterby') === "acc")) : catalog).map((product) => (
            <ProductCard key ={`product_${product.id}_key`} {...product}/>
            ) )}

    </section>
   )
}

export default ProductsContainer