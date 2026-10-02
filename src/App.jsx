import Header from "./components/header"
import Home from "./Pages/HomePage/Home"
import Checkout from "./Pages/CheckoutPage/Checkout"
import { Routes,Route } from "react-router-dom"
import CartContextProvider from "./Contexts/CartContext"
import ToastProvider from "./Contexts/ToastContext"
function App() {

  return (
    
    <CartContextProvider>
      <ToastProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </ToastProvider>
    </CartContextProvider>
    
  )
}

export default App
 