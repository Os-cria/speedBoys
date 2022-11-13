import React from 'react'
import '../assets/styles/footer.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import CopyRight from './CopyRight';

export default function Footer() {
const renderPhoneLogo=()=>{
    return (
        <svg style={{'background-color': '#72A82A','width':'125px'}} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.91 15.9411L19.8105 15.6412C19.5747 14.9404 18.8019 14.2095 18.092 14.017L15.4644 13.2992C14.7518 13.1053 13.7354 13.366 13.2141 13.8873L12.2631 14.8382C8.80707 13.9044 6.09701 11.1942 5.16441 7.73888L6.11542 6.78787C6.63675 6.26653 6.89738 5.25143 6.70353 4.53888L5.98703 1.91001C5.79317 1.19876 5.06096 0.425969 4.36152 0.192796L4.06158 0.0919481C3.3608 -0.141225 2.36138 0.0945887 1.84008 0.615886L0.417572 2.0397C0.163441 2.29249 0.00102071 3.01552 0.00102071 3.01816C-0.0487324 7.5345 1.72218 11.8858 4.91686 15.0805C8.1037 18.2673 12.4387 20.0357 16.9419 19.9977C16.9655 19.9977 17.7094 19.8379 17.9636 19.585L19.3861 18.1625C19.9074 17.6413 20.1432 16.6419 19.91 15.9411Z" fill="white"/>
        </svg>
        
    )
}

const renderWhatsAppLogo=()=>{
    return (
        <svg style={{'background-color': '#72A82A','width':'125px'}} width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 21.0765C0.278248 20.2418 0.540366 19.4595 0.802484 18.6772C1.0646 17.9029 1.29849 17.1165 1.5969 16.3544C1.75014 15.9673 1.70175 15.6769 1.50819 15.314C0.45165 13.3541 0.137108 11.2532 0.504073 9.0675C0.814582 7.21654 1.60094 5.57931 2.8712 4.18807C4.96411 1.9016 7.57723 0.804734 10.6662 0.933777C12.9285 1.02653 14.9286 1.85321 16.6344 3.3493C18.2232 4.74054 19.2596 6.47052 19.7395 8.52713C20.1266 10.1845 20.0823 11.8339 19.6064 13.4671C19.0015 15.5358 17.8442 17.2416 16.1223 18.54C13.731 20.3466 11.0493 20.9072 8.12566 20.3386C7.24655 20.1692 6.40778 19.8547 5.61739 19.4272C5.48835 19.3587 5.37947 19.3425 5.23833 19.3909C3.73821 19.8748 2.23405 20.3547 0.73393 20.8346C0.508106 20.9072 0.278248 20.9838 0 21.0765ZM2.55263 18.5481C2.63328 18.5279 2.66957 18.5199 2.70586 18.5078C3.64546 18.2094 4.58505 17.9069 5.52867 17.6166C5.61739 17.5884 5.73837 17.6125 5.82305 17.6529C6.23034 17.8545 6.6215 18.0965 7.04089 18.2739C8.76684 19.0038 10.5452 19.1207 12.3437 18.6207C14.4891 18.0198 16.1344 16.7415 17.2595 14.8099C18.2232 13.1565 18.5539 11.3701 18.2555 9.49092C17.8764 7.0996 16.6505 5.22041 14.6222 3.88563C12.8639 2.73231 10.9283 2.34115 8.86362 2.66779C7.08525 2.95007 5.56497 3.76062 4.31083 5.05911C3.23413 6.1721 2.5123 7.48673 2.19776 8.99895C1.75014 11.1644 2.08081 13.213 3.28252 15.0801C3.52448 15.4551 3.51641 15.7414 3.37124 16.1245C3.07686 16.9109 2.83087 17.7134 2.55263 18.5481Z" fill="white"/>
            <path d="M15.2633 13.5718C15.2512 14.3501 14.8843 14.9429 14.1423 15.3139C13.4124 15.6768 12.6704 15.7696 11.9082 15.4711C11.2227 15.201 10.5291 14.9388 9.86773 14.6122C8.99669 14.1807 8.28293 13.5355 7.62965 12.8217C6.90782 12.0314 6.29486 11.1522 5.79079 10.2127C5.43189 9.54728 5.21413 8.84158 5.29075 8.06732C5.3714 7.24467 5.7545 6.58736 6.39971 6.09135C6.52875 5.99457 6.72232 5.95021 6.88765 5.93408C7.10138 5.91795 7.31511 5.95021 7.52883 5.96634C7.70627 5.98247 7.80305 6.10749 7.86354 6.25266C8.02081 6.63979 8.16195 7.02691 8.31115 7.41807C8.41197 7.68019 8.48859 7.95441 8.60957 8.20846C8.75877 8.523 8.66602 8.78512 8.47246 9.02708C8.30712 9.23274 8.13372 9.43033 7.94419 9.60777C7.78692 9.75697 7.75869 9.91021 7.86354 10.0917C8.32729 10.9184 8.89185 11.6604 9.63788 12.2612C10.1299 12.6564 10.6742 12.9508 11.2388 13.225C11.4041 13.3056 11.5655 13.2936 11.6945 13.1443C11.9727 12.8258 12.255 12.5112 12.5292 12.1886C12.7067 11.983 12.7954 11.9426 13.0333 12.0636C13.7229 12.4104 14.4044 12.7693 15.0899 13.1282C15.2512 13.2169 15.2916 13.3621 15.2633 13.5718Z" fill="white"/>
        </svg>
    )
}
  return (
    <>
        <div className="row footerPrincipal">
            <div className="col-md-6 bg-green footer-left">
                <h2 className='tituloFooter'>Fale com a nossa equipe</h2>
                <p className='subTituloFooter'>Envie uma mensagem ou entre em contato pelos telefones</p>

                <Form.Control
                    style={{'margin-bottom': '10px'}}
                    className = 'formControl bg-green borda-branca'
                    placeholder='Digite seu nome'
                    type="text"
                    id="name"
                />

                <Form.Control
                    style={{'margin-bottom': '10px'}}
                    className = 'formControl bg-green borda-branca '
                    placeholder='Digite seu telefone'
                    type="text"
                    id="phone"
                />

                <Form.Control as="textarea"
                    id="comment"
                    style={{'height': '150px'}}
                    className = 'formControl bg-green borda-branca '
                    placeholder="Escreva sua mensagem" />

            <Button className='btnEnviar'>Enviar</Button>

            </div>

            <div className="col-md-6 bg-green footer-right">
                <div className="phone">
                    {renderPhoneLogo()}
                    <p>(00) 0000-0000)</p>
                </div>

                <div className="phone">
                    {renderWhatsAppLogo()}
                    <p>(00) 0000-0000)</p>
                </div>

            </div>

            <CopyRight/>
        </div>  
    </>
  )
}