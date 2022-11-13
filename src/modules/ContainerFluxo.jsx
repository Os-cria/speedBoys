import React from 'react'
import '../assets/styles/containerFluxo.css'
import googlePlay from '../assets/images/googleplay.png'
export default function ContainerFluxo() {
    return (
        <>
            <div className="row containerFluxo">
                <div className="circulo"></div>

                <div className="row">
                    <div className='col-md-6 borda-direita'></div>
                    <div className="col-md-6 cf-right borda-esquerda">
                        <h4 className='titulo'>Acesso</h4>
                        <p style={{'margin-bottom': '0px'}} className='paragrafo'>
                        Baixe o aplicativo no seu smartphone
                        ou acesse o site com auxílio de um
                        computador.
                        </p>
                        <img className='googlePlayLogo' src={googlePlay} alt="" />
                    </div>
                </div>

                <div className="circulo"></div>

                <div className="row">
                    <div className="col-md-6 cf-left borda-direita">
                    <h4 style={{'text-align': 'end'}} className='titulo'>Cadastro</h4>
                        <p className='paragrafo'>
                        Preencha o cadastro na plataforma,
                        e vocé jd estard pronto para solicitar.
                        </p>
                    </div>
                    <div className='col-md-6 borda-esquerda'></div>
                </div>

                <div className="circulo"></div>

                <div className="row">
                    <div className='col-md-6 borda-direita'></div>
                    <div className="col-md-6 cf-right borda-esquerda">
                        <h4 className='titulo'>Solicite</h4>
                        <p className='paragrafo'>
                        Preencha os campos de endereco,
                        onde você está e para onde deseja ir.
                        Visualize o valor do seu serviço na
                        hora e aguarde localizarmos o
                        melhor Motoboy para você.
                        </p>
                    </div>
                </div>

                <div className="circulo"></div>

                <div className="row">
                    <div className="col-md-6 cf-left borda-direita">
                    <h4 style={{'text-align': 'end'}} className='titulo'>Acompanhe em tempo real</h4>
                        <p className='paragrafo'>
                        Apos localizarmos o Motoboy ideal,
                        vocé poderá acompanhar a
                        localizagao dele em tempo real a
                        todo momento.
                        </p>
                    </div>
                    <div className='col-md-6 borda-esquerda'></div>
                </div>
                
                <div className="circulo"></div>

                <div className="row ultimoFluxo">
                    <div className='col-md-6 borda-direita'></div>
                    <div className="col-md-6 cf-right borda-esquerda">
                    <h4 className='titulo'>Avalie</h4>
                        <p className='paragrafo'>
                        Apos a conclusão, avalie o serviço do
                        seu Motoboy em até 5 estrelas.
                        </p>
                    </div>
                </div>
                <div className="circulo"></div>
                <div className='fimFluxo'></div>
            </div>
        </>
    )
}
