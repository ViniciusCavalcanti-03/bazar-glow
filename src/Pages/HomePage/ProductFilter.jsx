const ProductFilter = ({setSearchParams}) => {
    return(
        <section className="flex justify-center items-center py-8">
            <input id="filter-0" type="radio" name="filter-selection" className="hidden" onClick={() => setSearchParams({})} />
            <label className="rounded-s-lg bg-pink-600 hover:bg-pink-700 p-2 text-sm text-white cursor-pointer" htmlFor="filter-0">Todos</label>
            <input id="filter-1" type="radio" name="filter-selection" className="hidden" onClick={() => setSearchParams({filterby:'roupas'})} />
            <label className="bg-pink-600 hover:bg-pink-700 p-2 text-sm text-white cursor-pointer" htmlFor="filter-1">Roupas</label>
            <input id="filter-2" type="radio" name="filter-selection" className="hidden" onClick={() => setSearchParams({filterby:'acc'})} />
            <label className="rounded-s-lg bg-pink-600 hover:bg-pink-700 p-2 text-sm text-white cursor-pointer" htmlFor="filter-2" dir="rtl">Calçados/acessorios</label>

        </section>
    )

}

export default ProductFilter