import {React, useState} from 'react'
import Cabecalho from './Cabecalho';
import ContainerPrincipal from './ContainerPrincipal';
import Cards from './Cards';
import ContainerBottom from './ContainerBottom';
import ContainerFluxo from './ContainerFluxo';
import Footer from './Footer';
import '../assets/styles/containerPrincipal.css'


export default function Home() {

  const [blur, setBlur] = useState(false)

  const handleChangeBlur= (bool)=>{
      setBlur(bool)
  }

  return (
    <div>
          <div className={blur? 'blur': 'hidden' }></div>
          <Cabecalho/>
          <ContainerPrincipal  setBlur = {handleChangeBlur}/>
          <Cards/>
          <ContainerBottom/>
          <ContainerFluxo/>
          <Footer/>
    </div>
  )
}
