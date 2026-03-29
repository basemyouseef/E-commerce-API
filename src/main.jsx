import { StrictMode } from 'react'
import './index.css'
import App from './App.jsx'
import ReactDOM from "react-dom/client";
import { BrowserRouter } from 'react-router-dom'
import CartProvider from './Componetes/CartContext/CartContext.jsx';

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter basename="/E-commerce-API">
    <CartProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </CartProvider>
  </BrowserRouter>
);
