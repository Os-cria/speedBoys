import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2';

export default function FluxoRecebimento(props) {
    const {changeFluxo} = props
    const showAlertaCadastro =()=>{
        Swal.fire({
            icon: 'success',
            title: 'Cadastro realizado com sucesso!',
            showConfirmButton: false,
            timer: 1500
          })
    }

  return (
    <>
        <div className='row'><Button  onClick={()=>changeFluxo('INICIO')} className= 'btnVoltar'>&lt; Sair</Button></div>

         <div className="row">
            <div className="col-md-4">
                <Form.Label style={{'margin-top': '10px'}} className= 'labelCadastroEntregador' htmlFor="banco">Banco: *</Form.Label>
                    <Form.Control
                        style={{'margin-top': '10px', 'width': '100%'}}
                        className = 'formCadastroEntregador'
                        placeholder='Informe o banco'
                        type="text"
                        id="banco"
                    />

            </div>

            <div className="col-md-4">
                <Form.Label style={{'margin-top': '10px'}} className= 'labelCadastroEntregador' htmlFor="agencia">Agência: *</Form.Label>
                    <Form.Control
                        style={{'margin-top': '10px', 'width': '100%'}}
                        className = 'formCadastroEntregador'
                        placeholder='Digite a agência'
                        type="text"
                        id="agencia"
                    />

            </div>

            <div className="col-md-4">
                <Form.Label style={{'margin-top': '10px'}} className= 'labelCadastroEntregador' htmlFor="conta">Conta: *</Form.Label>
                    <Form.Control
                        style={{'margin-top': '10px', 'width': '100%'}}
                        className = 'formCadastroEntregador'
                        placeholder='Digite a conta'
                        type="text"
                        id="conta"
                    />
            </div>
        </div>   

        <div className="row">
            <div className="col-md-4">
                <Form.Label style={{'margin-top': '10px'}} className= 'labelCadastroEntregador' htmlFor="operacao">Operação: *</Form.Label>
                    <Form.Control
                        style={{'margin-top': '10px', 'width': '100%'}}
                        className = 'formCadastroEntregador'
                        placeholder='Informe a operação'
                        type="text"
                        id="operacao"
                    />

            </div>

            <div className="col-md-4">
                <Form.Label style={{'margin-top': '10px'}} className= 'labelCadastroEntregador' htmlFor="pix">Pix: *</Form.Label>
                    <Form.Control
                        style={{'margin-top': '10px', 'width': '100%'}}
                        className = 'formCadastroEntregador'
                        placeholder='Digite o pix'
                        type="text"
                        id="pix"
                    />

            </div>

            <div className="col-md-4">
                <Form.Label style={{'margin-top': '10px'}} className= 'labelCadastroEntregador' htmlFor="nascimento">Data de nascimento: *</Form.Label>
                    <Form.Control
                        style={{'margin-top': '10px', 'width': '100%'}}
                        className = 'formCadastroEntregador'
                        placeholder='Digite sua data de nascimento'
                        type="text"
                        id="nascimento"
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

            <div className="row">
                <div className="col-md-6">
                    <Form.Label  style={{'margin-top': '10px'}} className= 'labelCadastroEntregador'  for='selecao-arquivo' htmlFor="selecao-arquivo">Anexar foto: *</Form.Label>
                    <br></br>
                    <Form.Label  style={{'margin-top': '10px', 'margin-left':'0px'}} className= 'labelCadastroEntregador labelFile'  for='selecao-arquivo' htmlFor="selecao-arquivo">Selecionar</Form.Label>
                    <input type="file" name="" id="selecao-arquivo" />
                </div>
            </div>  
            <div className="col-md-12">
                <Button  onClick={()=>showAlertaCadastro()} style={{'margin-left': '50px', 'margin-top' : '20px'}} className = 'btnCalcular'>Cadastrar</Button>
            </div>

        </div> 
   
    </>
  )
}
