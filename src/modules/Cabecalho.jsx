import React from 'react'
import '../assets/styles/cabecalho.css'
import suaLogo from '../assets/images/logo.png'
import { Link } from "react-router-dom"

export default function Cabecalho() {
  return (
        <nav className="navbar navbar-expand-lg bg">
            <div className="container-fluid">
                <Link to="/">
                    <img style={{'margin-left': '60px'}} src={suaLogo} alt="logo" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul style={{'margin-left': 'auto'}} className="navbar-nav">
                        <li className="nav-item">
                        <a className="nav-link title" aria-current="page" target="_blank" href="https://speedboys.com.br/integracaoWebService/doc">API de Integração</a>
                        </li>
                        <li className="nav-item">
                            <Link className='linkNavBar' to='/areaEntregador'>
                                <a className="nav-link title">Area do entregador</a>    
                            </Link>  
                        </li>
                        <li style={{'margin-right': '100px'}} className="nav-item m-r-20">
                            <Link className='linkNavBar' to='/areaClienteLogin'>
                                <a className="nav-link title">Area do cliente</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
  )
}
