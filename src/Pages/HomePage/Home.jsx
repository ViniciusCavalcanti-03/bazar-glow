import HomeMain from "./HomeMain"
import CartOverlay from "../../components/Cart/CartOverlay"
import Footer from "../../components/Footer"
const Home = () => {
    return (
    <>
    <div className="px-4 pt-8 text-center">
        <h1 className="font-display text-3xl text-brand-700">Seus achadinhos estão aqui</h1>
        <p className="mt-1 text-sm text-stone-500">Peças selecionadas, prontas para o seu guarda-roupa</p>
    </div>
    
    <CartOverlay />
    <HomeMain />
    <Footer />
    </>
)
}

export default Home