import React from 'react'
import CopyRight from './../CopyRight';
import Cabecalho from './../Cabecalho';
import celularCliente from '../../assets/images/celular_completo.png'
import googlePlay from '../../assets/images/googleplay.png'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

export default function LoginCliente() {

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
    <div>
        <Cabecalho/>
        <div className="row containerTelaEntregador">
            <div className="col-md-6 ce-left">
                    
                <div className="textoLoginEntregador">
                    <h2 className='titleEntregador'>Portal do cliente</h2>
                    <p className='labelCadastro'>Ainda não tem um login? <Link to='/areaClienteCadastro' className='cadastre-se'>Cadastre-se</Link></p>
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
                    
            
            </div>
            <div className="col-md-6 ce-right">
                <img src={celularCliente} className="celularEntregador" alt="" />

                <div style={{'margin-left': '0px'}} className="row flex">
                    <h5 className='labelCelularEntregador'>Facilite suas solicitações pelo App</h5>
                    <img className='googlePlayEntregador' src={googlePlay} alt="" />
                    <p className='labelEntregador'> Agilidade na palma da sua mao</p>
                </div>


            </div>
        </div>
        <CopyRight/>
    </div>
  )
}
