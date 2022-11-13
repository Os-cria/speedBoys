import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./modules/Home";
import LoginCadastroEntregador from './modules/areaEntregador/LoginCadastroEntregador';
import LoginCliente from "./modules/areaCliente/LoginCliente";
import CadastroCliente from './modules/areaCliente/CadastroCliente';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/areaEntregador" element={<LoginCadastroEntregador />}/>
          <Route path="/areaClienteLogin" element={<LoginCliente />}/>
          <Route path="/areaClienteCadastro" element={<CadastroCliente />}/>



      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);