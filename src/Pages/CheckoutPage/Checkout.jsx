import FormInput from "../../utilitarios/FormInput"
import TotalPriceCell from "../../components/Cart/TotalPriceCell"
import CartProducts from "../../components/Cart/CartProducts"
import { useCartContext } from "../../Contexts/CartContext"
import { catalogIndexById } from "../../utilitarios/catalog"
import { buildWhatsappLink } from "./WppRedirect"

const Checkout = () => {
    const { cartItems } = useCartContext()

    const handleSubmit = (e) => {
    e.preventDefault()
    const field = (id) => e.target.querySelector(`#${id}`)?.value ?? ""

    const customer = {
        name: field("name"),
        surname: field("surname"),
        phone: field("phone"),
        postalCode: field("postal-code"),
        road: field("road"),
        number: field("address-number"),
        complement: field("complement"),
        neighborhood: field("neighborhood"),
        city: field("city"),
        state: field("state"),
    }

    const products = Object.entries(cartItems).map(([id, quantity]) => ({
        name: catalogIndexById[id].name,
        price: catalogIndexById[id].price,
        quantity,
    }))

    window.open(buildWhatsappLink(customer, products), "_blank")
}

    return(
   <main className="bg-stone-200 h-[calc(100dvh-5rem)]">
    <p className="text-center text-2xl font-bold text-slate-950 pt-8">
        Finalizar compra
      </p>
      <form onSubmit={handleSubmit} className="grid grid-rows-[max-content_1fr_1fr_1fr_1fr_1fr] grid-cols-3 grid-flow-col gap-4 h-3/4 mt-5 px-8">
        <p className="text-center text-sm font-bold text-slate-950">Seus dados</p>

        <FormInput fieldType='text' fieldName= 'Nome' id='name' placeholder= 'João' required/>
        <FormInput fieldType='text' fieldName= 'Sobrenome' id='surname' placeholder= 'Ribeiro' required/>
        <FormInput fieldType='tel' fieldName= 'Telefone' id='phone' placeholder= '(99) 99999-9999' required/>

        <p className="text-center text-sm font-bold text-slate-950 row-start-1">Pagamento e entrega</p>

        <FormInput fieldType='text' fieldName= 'CEP' id='postal-code' placeholder= '00000-000' required/>
        <FormInput fieldType='text' fieldName= 'Rua/Avenida' id='road' placeholder= 'Rua Gonçalo de Carvalho' required/>
        <div className="flex justify-center gap-3">
          <FormInput fieldType='int' fieldName= 'Número' id='address-number' placeholder= '4015' className="w-1/2" required/>
          <FormInput fieldType='text' fieldName= 'Complemento' id='complement' placeholder= 'Ap 201' className="w-1/2"/>
        </div>
        <FormInput fieldType='text' fieldName= 'Bairro' id='neighborhood' placeholder= 'Boa viagem' required/>
        <div className="flex justify-center gap-3">
          <FormInput fieldType='text' fieldName= 'Cidade' id='city' placeholder= 'Recife' className="w-1/2" required/>
          <FormInput fieldType='text' fieldName= 'Estado' id='state' placeholder= 'Pernambuco' className="w-1/2" required/>
        </div>

        <p className="text-center text-sm font-bold text-slate-950 row-start-1">Seus produtos</p>
        <section className="row-span-4 p-2 bg-neutral-100 rounded-md overflow-auto">
          <CartProducts isHomePage={false}/>
        </section>
        <section className="row-span-1 flex flex-col gap-2" >
          <TotalPriceCell/>
          <button className="bg-pink-600 text-slate-100 rounded-md p-1 hover:bg-pink-700 text-center">Finalizar Compra</button>
        </section>
    
    
    </form>    
   </main>
   
)

}

export default Checkout