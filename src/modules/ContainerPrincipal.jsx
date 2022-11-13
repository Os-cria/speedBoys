import React, { useState } from 'react'
import '../assets/styles/containerPrincipal.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import calculatorLogo from '../assets/images/calculator.png'
import Footer from './Footer';
import CopyRight from './CopyRight';
import { Link } from 'react-router-dom';
export default function ContainerPrincipal(props) {

    const [showModalCalcular, setShowModalCalcular] = useState(false)
    const {setBlur} = props

    const openCloseModalCalcular=(bool)=>{
        setBlur(bool)
        setShowModalCalcular(bool)
    }

  return (
    <div>
        <div class="row divPrincipal">
            <div class="col-md-6 colunaLeft">
                <h1 className='titlePrincipal'>Cotação gratuita para serviços de motoboy</h1>
                <h5 className='subTitle'>Em toda região da Grande Goiânia</h5>
            
            <Form.Label className= 'label' htmlFor="ondeEsta">Onde você está?</Form.Label>
                <Form.Control
                    className = 'formControl border-gradient border-gradient-green'
                    placeholder='Digite o endereço'
                    type="text"
                    id="ondeEsta"
                />

            <Form.Label style={{'margin-top': '10px'}} className= 'label' htmlFor="ondeVai">Para onde você vai?</Form.Label>
                <Form.Control
                    className = 'formControl border-gradient border-gradient-green'
                    placeholder='Digite o endereço'
                    type="text"
                    id="ondeVai"
                />

            <Button onClick={()=>openCloseModalCalcular(true)} className='btnCalcular'>Calcular</Button>
            </div>
            <div class="col-md-6 colunaRight">
                <img className='logoCalculator' src={calculatorLogo} alt="LogoCalculadora" />
            </div>
            
         
            <div className={showModalCalcular? 'modalCalcular' : 'hidden'}>
                <div style={{'padding': '10px'}} className="row">
                    <div className="col-md-6 clModalCalcular">
                        <div className="row">
                            <div className="col-md-4">
                                <i class="bi bi-geo-alt-fill icones"></i>
                                <h5 className='titleModalCadastro'>Distância aproximada:</h5>
                            </div>

                            <div className="col-md-4">
                                <i class="bi bi-clock icones"></i>
                                <h5 className='titleModalCadastro'>Tempo estimado aproximada:</h5>
                            </div>

                            <div className="col-md-4">
                                <i className="bi bi-coin icones"></i>
                                <h5 className='titleModalCadastro'>Valor cotado:</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 crModalCalcular">
                        <i  onClick={()=>openCloseModalCalcular(false)} class="bi bi-x-circle closeCircle"></i>
                        <p>
                            Faca o <Link className='link' to='areaClienteCadastro'>Cadastro</Link> para solicitar, ou realize o <Link className='link' to='areaClienteLogin'>Login</Link>.
                            <br/>
                            Ao fazer o seu pedido, localizamos o Motoboy mais préximo ao seu endereço.
                        </p>

                    </div>
                </div>
            </div>
        
        </div>
        
    </div>
  )
}
