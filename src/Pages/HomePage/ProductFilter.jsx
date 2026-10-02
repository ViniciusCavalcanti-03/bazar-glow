import { useState } from "react"

const options = [
    { id: 'filter-0', label: 'Todos', value: null },
    { id: 'filter-1', label: 'Roupas', value: 'roupas' },
    { id: 'filter-2', label: 'Calçados e acessórios', value: 'acc' },
]

const ProductFilter = ({ setSearchParams, current }) => {
    // começa sem nada selecionado; se a página abrir já com ?filterby=..., marca o certo
    const [selected, setSelected] = useState(
        current ? options.find((o) => o.value === current)?.id ?? null : null
    )

    const handleSelect = (o) => {
        setSelected(o.id)
        setSearchParams(o.value ? { filterby: o.value } : {})
    }

    return (
        <section className="flex flex-wrap justify-center gap-2 px-4 py-6">
            {options.map((o) => (
                <div key={o.id}>
                    <input
                        id={o.id}
                        type="radio"
                        name="filter-selection"
                        className="sr-only"
                        checked={selected === o.id}
                        onChange={() => handleSelect(o)}
                    />
                    <label
                        htmlFor={o.id}
                        className={`cursor-pointer rounded-full border px-4 py-2 text-sm transition ${
                            selected === o.id
                                ? 'border-brand-700 bg-brand-700 text-white'
                                : 'border-brand-200 bg-white text-stone-600 hover:border-brand-500'
                        }`}
                    >
                        {o.label}
                    </label>
                </div>
            ))}
        </section>
    )
}

export default ProductFilter