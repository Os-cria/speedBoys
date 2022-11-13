import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function FluxoAdicionais(props) {
    const {changeFluxo} = props


  return (
    <>
        <div className='row'><Button  onClick={()=>changeFluxo('INICIO')} className= 'btnVoltar'>&lt; Voltar</Button></div>

        <div className="row">
            <div className="col-md-4">
                <Form.Label style={{'margin-top': '10px'}} className= 'labelCadastroEntregador' htmlFor="cpf">CPF: *</Form.Label>
                    <Form.Control
                        style={{'margin-top': '10px', 'width': '100%'}}
                        className = 'formCadastroEntregador'
                        placeholder='Digite seu CPF'
                        type="text"
                        id="cpf"
                    />

            </div>

            <div className="col-md-4">
                <Form.Label style={{'margin-top': '10px'}} className= 'labelCadastroEntregador' htmlFor="rg">RG: *</Form.Label>
                    <Form.Control
                        style={{'margin-top': '10px', 'width': '100%'}}
                        className = 'formCadastroEntregador'
                        placeholder='Digite seu RG'
                        type="text"
                        id="telefoneEntregador"
                    />

            </div>

            <div className="col-md-4">
                <Form.Label style={{'margin-top': '10px'}} className= 'labelCadastroEntregador' htmlFor="celularEntregador">Orgão Emissor: *</Form.Label>
                    <Form.Control
                        style={{'margin-top': '10px', 'width': '100%'}}
                        className = 'formCadastroEntregador'
                        placeholder='Digite o OE'
                        type="text"
                        id="celularEntregador"
                    />
            </div>
        </div>

        <div className="row">
            <div className="col-md-6">
                <Form.Label style={{'margin-top': '10px'}} className= 'labelCadastroEntregador' htmlFor="nomePai">Nome completo do pai: *</Form.Label>
                    <Form.Control
                        style={{'margin-top': '10px', 'width': '100%'}}
                        className = 'formCadastroEntregador'
                        placeholder='Digite o nome'
                        type="text"
                        id="nomePai"
                    />

            </div>

            <div className="col-md-6">
                <Form.Label style={{'margin-top': '10px'}} className= 'labelCadastroEntregador' htmlFor="nomeMae">Nome completo da mãe: *</Form.Label>
                    <Form.Control
                        style={{'margin-top': '10px', 'width': '100%'}}
                        className = 'formCadastroEntregador'
                        placeholder='Digite o nome'
                        type="text"
                        id="nomeMae"
                    />

            </div>
        </div>


        <div className="row">
            <div className="col-md-4">
                <Form.Label style={{'margin-top': '10px'}} className= 'labelCadastroEntregador' htmlFor="cep">Cep: *</Form.Label>
                    <Form.Control
                        style={{'margin-top': '10px', 'width': '100%'}}
                        className = 'formCadastroEntregador'
                        placeholder='Digite seu CEP'
                        type="text"
                        id="cep"
                    />

            </div>

            <div className="col-md-6">
                <Form.Label style={{'margin-top': '10px'}} className= 'labelCadastroEntregador' htmlFor="rua">Rua: *</Form.Label>
                    <Form.Control
                        style={{'margin-top': '10px', 'width': '100%'}}
                        className = 'formCadastroEntregador'
                        placeholder='Digite sua rua'
                        type="text"
                        id="rua"
                    />

            </div>

            <div className="col-md-2">
                <Form.Label style={{'margin-top': '10px'}} className= 'labelCadastroEntregador' htmlFor="celularEntregador">Numero: *</Form.Label>
                    <Form.Control
                        style={{'margin-top': '10px', 'width': '100%'}}
                        className = 'formCadastroEntregador'
                        placeholder=''
                        type="text"
                        id="celularEntregador"
                    />
            </div>
        </div>

        <div className="row">
            <div className="col-md-6">
                <Form.Label style={{'margin-top': '10px'}} className= 'labelCadastroEntregador' htmlFor="complemento">Complemento:</Form.Label>
                    <Form.Control
                        style={{'margin-top': '10px', 'width': '100%'}}
                        className = 'formCadastroEntregador'
                        placeholder='Digite seu complemento'
                        type="text"
                        id="complemento"
                    />

            </div>

            <div className="col-md-6">
                <Form.Label style={{'margin-top': '10px'}} className= 'labelCadastroEntregador' htmlFor="bairro">Bairro: *</Form.Label>
                    <Form.Control
                        style={{'margin-top': '10px', 'width': '100%'}}
                        className = 'formCadastroEntregador'
                        placeholder='Digite seu bairro'
                        type="text"
                        id="bairro"
                    />

            </div>
        </div>

        <div className="row">
            <div className="col-md-6">
                <Form.Label style={{'margin-top': '10px'}} className= 'labelCadastroEntregador' htmlFor="uf">Estado:</Form.Label>
                    <Form.Control
                        style={{'margin-top': '10px', 'width': '100%'}}
                        className = 'formCadastroEntregador'
                        placeholder='Digite seu estado'
                        type="text"
                        id="uf"
                    />

            </div>

            <div className="col-md-6">
                <Form.Label style={{'margin-top': '10px'}} className= 'labelCadastroEntregador' htmlFor="cidade">Cidade:</Form.Label>
                    <Form.Control
                        style={{'margin-top': '10px', 'width': '100%'}}
                        className = 'formCadastroEntregador'
                        placeholder='Digite sua cidade'
                        type="text"
                        id="cidade"
                    />

            </div>
        </div>
    </>
  )
}
