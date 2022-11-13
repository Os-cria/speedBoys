import React, { useState } from 'react'
import Cabecalho from '../Cabecalho';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import CopyRight from '../CopyRight';
import '../../assets/styles/loginCadastroEntregador.css'
import celularEntregador from '../../assets/images/celular_entregador.png'
import googlePlay from '../../assets/images/googleplay.png'
import CadastroForm from './cadastroForm';
import Swal from 'sweetalert2';


export default function LoginCadastroEntregador() {
    const[showLogin, setShowLogin] = useState(true)

    const handleShowLogin = (e)=>{
        setShowLogin(true)
    }

    const esqueciMinhaSenha= async ()=>{
        Swal.fire({
            title: 'Informe o e-mail da conta',
            input: 'text',
            inputLabel: 'O link para redefinição de senha será enviado para esse e-mail',
            inputPlaceholder: 'Digite seu email',
            confirmButtonText: 'Enviar'
        })
        
          

    }



  return (
    <>
        <Cabecalho/>
        <div className="row containerTelaEntregador">
            <div className="col-md-6 ce-left">
                {showLogin ? 
                    <>
                        <div className="textoLoginEntregador">
                            <h2 className='titleEntregador'>Portal do entregador</h2>
                            <p className='labelCadastro'>Ainda não tem um login? <a className='cadastre-se' onClick={()=> setShowLogin(false)}>Cadastre-se</a></p>
                        </div>


                        <Form.Control
                            className = 'formControl formEntregador'
                            placeholder='Digite seu email'
                            type="text"
                            id="email"
                        />

                        <Form.Control
                            className = 'formControl formEntregador'
                            placeholder='Digite sua senha'
                            type="password"
                            id="password"
                        />

                        <Button className='btnCalcular'>Entrar</Button>
                        <label onClick={()=>esqueciMinhaSenha()} className='esqueciSenha'>Esqueci minha senha</label>
                    
                    </>
                
                :  <CadastroForm showLogin = {handleShowLogin}/>}
            </div>
            <div className="col-md-6 ce-right">
                <img src={celularEntregador} className="celularEntregador" alt="" />

                <div style={{'margin-left': '0px'}} className="row flex">
                    <h5 className='labelCelularEntregador'>Receba serviços diretamente no aplicativo</h5>
                    <img className='googlePlayEntregador' src={googlePlay} alt="" />
                    <p className='labelEntregador'> Todo o controle na palma da sua mao</p>
                </div>


            </div>
        </div>
        <CopyRight/>
    </>
  )
}
