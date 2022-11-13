import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function FluxoLogin(props) {

  return (
    <>
        <Form.Label style={{'margin-top': '10px'}} className= 'labelCadastroEntregador' htmlFor="nomeEntregador">Nome completo: *</Form.Label>
            <Form.Control
                className = 'formCadastroEntregador'
                placeholder='Digite seu nome'
                type="text"
                id="nomeEntregador"
            />

        <Form.Label style={{'margin-top': '10px'}} className= 'labelCadastroEntregador' htmlFor="emailEntregador">E-mail: *</Form.Label>
            <Form.Control
                className = 'formCadastroEntregador'
                placeholder='Digite seu email'
                type="email"
                id="emailEntregador"
            />

        <div className="row">
            <div className="col-md-6">
                <Form.Label style={{'margin-top': '10px'}} className= 'labelCadastroEntregador' htmlFor="telefoneEntregador">Telefone: *</Form.Label>
                    <Form.Control
                        style={{'margin-top': '10px', 'width': '100%'}}
                        className = 'formCadastroEntregador'
                        placeholder='Digite seu telefone'
                        type="text"
                        id="telefoneEntregador"
                    />

            </div>
            <div className="col-md-6">
                <Form.Label style={{'margin-top': '10px'}} className= 'labelCadastroEntregador' htmlFor="celularEntregador">Celular: *</Form.Label>
                    <Form.Control
                        style={{'margin-top': '10px', 'width': '100%'}}
                        className = 'formCadastroEntregador'
                        placeholder='Digite seu celular'
                        type="text"
                        id="celularEntregador"
                    />
            </div>
        </div>
        <div className="row">
            <div className="col-md-6">
                <Form.Label style={{'margin-top': '10px'}} className= 'labelCadastroEntregador' htmlFor="loginEntregador">Login para acesso: *</Form.Label>
                    <Form.Control
                        style={{'margin-top': '10px', 'width': '100%'}}
                        className = 'formCadastroEntregador'
                        placeholder='Digite seu login'
                        type="text"
                        id="loginEntregador"
                    />
            </div>
        </div>

        <div className="row">
            <div className="col-md-6">
                <Form.Label style={{'margin-top': '10px'}} className= 'labelCadastroEntregador' htmlFor="loginEntregador">Tipo de serviço: *</Form.Label>
                <Form.Select 
                style={{'margin-top': '10px', 'width': '100%'}}
                className = 'formCadastroEntregador selectTipoServico'
                >
                    <option>Selecione uma opção</option>
                    <option value="1">Motofrete contrato</option>
                    <option value="2">Motofrete delivery</option>
                </Form.Select>

            </div>
        </div>

    </>
  )
}
