import React from 'react'
import '../assets/styles/containerBottom.css'
import suaLogo from '../assets/images/logo_maior.png'
import celular from '../assets/images/celular_completo.png'
export default function ContainerBottom() {
  return (
    <>
        <div className="row containerBottom">
            <div className="col-md-6 cb-left ">
                <img className='suaLogo' src={suaLogo} alt="" />

                <p>
                    Atuamos há anos no ramo com compromisso, seriedade e
                    profissionalismo, já com diversos clientes atendidos e satisfeitos.
                    <br/> <br/>
                    Facilitamos a sua solicitação com um sistema online e APP para
                    solicitações simples e ágil.
                    <br/> <br/>
                    Inovamos sempre para proporcionar maior comodidade para
                    nossos parceiros e clientes.
                    <br/> <br/>
                    Estamos sempre à disposição de nossos clientes buscando
                    entendê-los e atendê-los com o máximo de qualidade dia e noite.
                </p>

            </div>

            <div class="col-md-6 colunaRight cb-right">
                <img className='celularLogo' src={celular} alt="LogoSmartphone" />
            </div>
        </div>
    </>
  )
}
