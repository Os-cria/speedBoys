import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function FluxoVeiculo(props) {
    const {changeFluxo} = props


  return (
    <>
        <div className='row'><Button onClick={()=>changeFluxo('ADICIONAIS')} className= 'btnVoltar'>&lt; Voltar</Button></div>

        <div className="row">
            <div className="col-md-4">
                <Form.Label style={{'margin-top': '10px'}} className= 'labelCadastroEntregador' htmlFor="tipoVeiculo">Veiculo: *</Form.Label>
                    <Form.Control
                        style={{'margin-top': '10px', 'width': '100%'}}
                        className = 'formCadastroEntregador'
                        placeholder='Digite o tipo do veiculo'
                        type="text"
                        id="tipoVeiculo"
                    />

            </div>

            <div className="col-md-4">
                <Form.Label style={{'margin-top': '10px'}} className= 'labelCadastroEntregador' htmlFor="marca">Marca: *</Form.Label>
                    <Form.Control
                        style={{'margin-top': '10px', 'width': '100%'}}
                        className = 'formCadastroEntregador'
                        placeholder='Digite a marca'
                        type="text"
                        id="marca"
                    />

            </div>

            <div className="col-md-4">
                <Form.Label style={{'margin-top': '10px'}} className= 'labelCadastroEntregador' htmlFor="modeloVeiculo">Modelo: *</Form.Label>
                    <Form.Control
                        style={{'margin-top': '10px', 'width': '100%'}}
                        className = 'formCadastroEntregador'
                        placeholder='Digite o modelo'
                        type="text"
                        id="modeloVeiculo"
                    />
            </div>
        </div> 

        
        <div className="row">
            <div className="col-md-4">
                <Form.Label style={{'margin-top': '10px'}} className= 'labelCadastroEntregador' htmlFor="cor">Cor: *</Form.Label>
                    <Form.Control
                        style={{'margin-top': '10px', 'width': '100%'}}
                        className = 'formCadastroEntregador'
                        placeholder='Digite a cor do veiculo'
                        type="text"
                        id="cor"
                    />

            </div>

            <div className="col-md-4">
                <Form.Label style={{'margin-top': '10px'}} className= 'labelCadastroEntregador' htmlFor="cilindradas">Cilindradas: *</Form.Label>
                    <Form.Control
                        style={{'margin-top': '10px', 'width': '100%'}}
                        className = 'formCadastroEntregador'
                        placeholder='Digite a cilindrada'
                        type="text"
                        id="cilindradas"
                    />

            </div>

            <div className="col-md-4">
                <Form.Label style={{'margin-top': '10px'}} className= 'labelCadastroEntregador' htmlFor="placaVeiculo">Placa: *</Form.Label>
                    <Form.Control
                        style={{'margin-top': '10px', 'width': '100%'}}
                        className = 'formCadastroEntregador'
                        placeholder='Informe a placa'
                        type="text"
                        id="placaVeiculo"
                    />
            </div>
        </div> 
    </>
  )
}
