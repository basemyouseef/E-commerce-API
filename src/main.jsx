import { StrictMode } from 'react'
import './index.css'
import App from './App.jsx'
import ReactDOM from "react-dom/client";
const root = document.getElementById("root");
import { BrowserRouter } from 'react-router-dom'
import CartProvider from './Componetes/CartContext/CartContext.jsx';

ReactDOM.createRoot(root).render(
  <BrowserRouter>
  <CartProvider>
    <App />
    </CartProvider>
  </BrowserRouter>


);