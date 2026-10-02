import HomeMain from "./HomeMain"
import CartOverlay from "../../components/Cart/CartOverlay"
import Footer from "../../components/Footer"
const Home = () => {
    return (
    <>
    <div className="px-4 pt-8 text-center">
        <h1 className="whitespace-nowrap font-display text-[clamp(1.25rem,6.5vw,1.875rem)] text-brand-700">
            Seus achadinhos estão aqui
        </h1>
        <p className="mt-1 whitespace-nowrap text-xs text-stone-500 md:text-sm">
            Peças selecionadas, prontas para o seu guarda-roupa
        </p>
    </div>
    
    <CartOverlay />
    <HomeMain />
    <Footer />
    </>
)
}

export default Home