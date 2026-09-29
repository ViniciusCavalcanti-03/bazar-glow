import Header from "./components/header"
import Home from "./Pages/HomePage/Home"
import Checkout from "./Pages/CheckoutPage/Checkout"
import { Routes,Route } from "react-router-dom"
import CartContextProvider from "./Contexts/CartContext"
function App() {

  return (
    
    <CartContextProvider>

      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </CartContextProvider>
    
  )
}

export default App
 