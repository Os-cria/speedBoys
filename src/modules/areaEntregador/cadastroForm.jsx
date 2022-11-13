import React, { useState } from 'react'
import '../../assets/styles/cadastroForm.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FluxoLogin from './FluxoLogin';
import FluxoAdicionais from './FluxoAdicionais';
import FluxoVeiculo from './FluxoVeiculo';
import FluxoRecebimento from './FluxoRecebimento';

export default function CadastroForm(props) {
    const[isFluxoLogin, setIsFluxoLogin] = useState(true)
    const[isFluxoAdicionais, setIsFluxoAdicionais] = useState(false)
    const[isFluxoVeiculo, setIsFluxoVeiculo] = useState(false)
    const[isFluxoRecebimento, setIsFluxoRecebimento] = useState(false)

    const {showLogin} = props


    const handleChangeFluxo=(fluxo)=>{
        setIsFluxoLogin(false)
        setIsFluxoAdicionais(false)
        setIsFluxoVeiculo(false)
        setIsFluxoRecebimento(false)

        switch(fluxo){
            case 'INICIO':
                setIsFluxoLogin(true)
            break;
            case 'ADICIONAIS':
                setIsFluxoAdicionais(true)
            break;
            case 'VEICULO':
                setIsFluxoVeiculo(true)
            break;
            case 'RECEBIMENTO':
                setIsFluxoRecebimento(true)
            break;
        }

    }




  return (
    <>
        <div className="">

        <div className="textoLoginEntregador">
            <h2 className='titleEntregador'>Portal do entregador</h2>
            <p className='labelCadastro'>Já possui um cadastro? <a className='cadastre-se' onClick={()=>showLogin()}>Faça o login</a></p>
        </div>
        
        {isFluxoLogin && <FluxoLogin/>}

        {isFluxoAdicionais && <FluxoAdicionais  changeFluxo = {handleChangeFluxo} /> }

        {isFluxoVeiculo && <FluxoVeiculo  changeFluxo = {handleChangeFluxo}/>}

        {isFluxoRecebimento && <FluxoRecebimento  changeFluxo = {handleChangeFluxo}/>}
            

        <div className="fluxoCadastroEntregador">
            <Button
            onClick={()=>handleChangeFluxo('INICIO')}
            className= {isFluxoLogin ? 'btnFluxoCadastroEntregador btnActive' : 'btnFluxoCadastroEntregador'} >
                Inicio
            </Button>

            <Button 
            onClick={()=>handleChangeFluxo('ADICIONAIS')}
            className=  {isFluxoAdicionais? 'btnFluxoCadastroEntregador btnActive' : 'btnFluxoCadastroEntregador'}>
                Adicionais
            </Button>

            <Button 
            onClick={()=>handleChangeFluxo('VEICULO')}
            className= {isFluxoVeiculo ? 'btnFluxoCadastroEntregador btnActive' : 'btnFluxoCadastroEntregador'}>
                Veiculo
            </Button>

            <Button 
            onClick={()=>handleChangeFluxo('RECEBIMENTO')}
            className= {isFluxoRecebimento ? 'btnFluxoCadastroEntregador btnActive' : 'btnFluxoCadastroEntregador'}>
                Recebimento
            </Button>
            <hr className='linhaFluxoCadastro'/>
        </div>

        </div>
    </>
  )
}
