import {React, useState} from 'react'
import CopyRight from './../CopyRight';
import Cabecalho from './../Cabecalho';
import celularCliente from '../../assets/images/celular_completo.png'
import googlePlay from '../../assets/images/googleplay.png'
import pessoaFisica from '../../assets/images/pessoafisica.png'
import pessoaJuridica from '../../assets/images/pessoajuridica.png'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

export default function () {
    const [isPessoaFisica, setIsPessoaFisica] = useState(false)
    const [isPessoaJuridica, setIsPessoJuridica] = useState(false)
    const [aceitoTermosDeUso, setAceitoTermosDeUso] = useState(undefined)

    const showAlertCadastrar =()=>{

        if(aceitoTermosDeUso){
            Swal.fire({
                icon: 'success',
                title: 'Cadastro realizado com sucesso!',
                showConfirmButton: false,
                timer: 1500
              })
        }else{
            Swal.fire({
                icon: 'error',
                title: 'É necessário aceitar os termos de uso para efetuar o cadastro!',
                showConfirmButton: false,
                timer: 1500
              })

        }
    }


    const setTipoPessoa=(tipo)=>{
        switch(tipo){
            case 'FISICA':
                setIsPessoJuridica(false)
                setIsPessoaFisica(true)
            break;
            case 'JURIDICA':
                setIsPessoJuridica(true)
                setIsPessoaFisica(false)
            break;

        }

    }

  return (
    <div>
        <Cabecalho/>
        <div className="row containerTelaEntregador">
            <div className="col-md-6 ce-left">
                    
                <div className="textoLoginEntregador">
                    <h2 className='titleEntregador'>Portal do cliente</h2>
                    <p className='labelCadastro'>Já tem um cadastro? <Link to='/areaClienteLogin' className='cadastre-se'>Faça o login</Link></p>
                    <p className='labelCadastroCliente'>Selecione como deseja se cadastrar</p>
                </div>

                <div className="divCard">
                    <div  onClick={()=>setTipoPessoa('FISICA')} className= {isPessoaFisica? 'cardLogin cardLoginSelected' : 'cardLogin'}>
                        <img className='' src={pessoaFisica} alt="logo" />
                        <p>Pessoa Fisica</p>
                    </div>

                    <div onClick={()=>setTipoPessoa('JURIDICA')} className= {isPessoaJuridica? 'cardLogin cardLoginSelected' : 'cardLogin'}>
                        <img className='' src={pessoaJuridica} alt="logo" />
                        <p>Pessoa Juridica</p>
                    </div>
                </div>

                {(isPessoaFisica || isPessoaJuridica) &&
                    <>
                        <div className="row">
                            <div className="col-md-6">
                                <Form.Label style={{'margin-top': '10px'}} className= 'labelCadastroEntregador' htmlFor="nome">Nome completo: *</Form.Label>
                                    <Form.Control
                                        style={{'margin-top': '10px', 'width': '100%'}}
                                        className = 'formCadastroEntregador'
                                        placeholder='Digite seu nome'
                                        type="text"
                                        id="nome"
                                    />

                            </div>
                            <div className="col-md-6">
                                <Form.Label style={{'margin-top': '10px'}} className= 'labelCadastroEntregador' htmlFor="cnpj">{isPessoaFisica? 'CPF' : 'CNPJ'}: *</Form.Label>
                                    <Form.Control
                                        style={{'margin-top': '10px', 'width': '100%'}}
                                        className = 'formCadastroEntregador'
                                        placeholder= {isPessoaFisica? 'Digite seu CPF': 'Digite seu CNPJ'}
                                        type="text"
                                        id="cpfcnpj"
                                    />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12">
                                <Form.Label style={{'margin-top': '10px'}} className= 'labelCadastroEntregador' htmlFor="email">E-mail: *</Form.Label>
                                    <Form.Control
                                        style={{'margin-top': '10px', 'width': '100%'}}
                                        className = 'formCadastroEntregador'
                                        placeholder='Digite seu e-mail'
                                        type="text"
                                        id="email"
                                    />
                            </div>
                        </div>

                        
                        <div className="row">
                            <div className="col-md-6">
                                <Form.Label style={{'margin-top': '10px'}} className= 'labelCadastroEntregador' htmlFor="telefone">Telefone: *</Form.Label>
                                    <Form.Control
                                        style={{'margin-top': '10px', 'width': '100%'}}
                                        className = 'formCadastroEntregador'
                                        placeholder='Informe seu telefone'
                                        type="text"
                                        id="telefone"
                                    />

                            </div>
                            <div className="col-md-6">
                                <Form.Label style={{'margin-top': '10px'}} className= 'labelCadastroEntregador' htmlFor="celular">Celular: *</Form.Label>
                                    <Form.Control
                                        style={{'margin-top': '10px', 'width': '100%'}}
                                        className = 'formCadastroEntregador'
                                        placeholder='Informe seu ceular'
                                        type="text"
                                        id="celular"
                                    />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <Form.Label style={{'margin-top': '10px'}} className= 'labelCadastroEntregador' htmlFor="uf">Estado: *</Form.Label>
                                    <Form.Control
                                        style={{'margin-top': '10px', 'width': '100%'}}
                                        className = 'formCadastroEntregador'
                                        placeholder='Informe seu Estado'
                                        type="text"
                                        id="uf"
                                    />

                            </div>
                            <div className="col-md-6">
                                <Form.Label style={{'margin-top': '10px'}} className= 'labelCadastroEntregador' htmlFor="celular">Cidade: *</Form.Label>
                                    <Form.Control
                                        style={{'margin-top': '10px', 'width': '100%'}}
                                        className = 'formCadastroEntregador'
                                        placeholder='Informe sua Cidade'
                                        type="text"
                                        id="celular"
                                    />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <Form.Label style={{'margin-top': '10px'}} className= 'labelCadastroEntregador' htmlFor="password">Senha: *</Form.Label>
                                    <Form.Control
                                        style={{'margin-top': '10px', 'width': '100%'}}
                                        className = 'formCadastroEntregador'
                                        placeholder='Digite sua senha'
                                        type="password"
                                        id="password"
                                    />

                            </div>

                            <div className="col-md-6">
                                <Form.Label style={{'margin-top': '10px'}} className= 'labelCadastroEntregador' htmlFor="password">Confirmar senha: *</Form.Label>
                                    <Form.Control
                                        style={{'margin-top': '10px', 'width': '100%'}}
                                        className = 'formCadastroEntregador'
                                        placeholder='Confirme sua senha'
                                        type="password"
                                        id="password"
                                    />

                            </div>
                        </div>

                        <div className="row">
                            <a className='linkContrato'>Contrato de adesão</a>
                            
                            <Form>
                                <Form.Check
                                    checked={aceitoTermosDeUso}
                                    onClick={()=>setAceitoTermosDeUso(true)}
                                    className=''
                                    type='radio'
                                    id='termos'
                                    label='Sim, eu li e aceito os termos de uso, e aceito receber campanhas de marketing,  noticias e promoções'
                                />

                                <Form.Check
                                    checked={aceitoTermosDeUso==false}
                                    onClick={()=>setAceitoTermosDeUso(false)}
                                    className=''
                                    type='radio'
                                    id='termos'
                                    label='Não aceito os termos de uso'
                                />
                            </Form>

                            <Button onClick={()=>showAlertCadastrar()} style={{'margin-left': '45px'}} className='btnCalcular'>Cadastrar</Button>
                        </div>
                    
                    </>
                }


            
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
