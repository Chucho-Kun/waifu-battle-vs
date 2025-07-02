import { useEffect } from 'react';
import Cards from '../components/Cards';
import Carrusel from "../components/Carrusel";
import VentanaFlotante from '../components/VentanaFlotante';
import { useWaifuStore } from '../store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import VentanaFinal from '../components/VentanaFinal';
import NextRival from '../components/NextRival';

export default function Battle() {

  const { anime , setAllWaifus , lastWaifus } = useWaifuStore()

useEffect( () => {
    const buttonAllWaifus = anime === 'TODOS' ? true : false
     setAllWaifus( buttonAllWaifus )
  } , [ anime ])

  return (
    <>
    <VentanaFinal />
     <h2 className="text-xl uppercase text-black font-bold pt-5 text-center">Selecciona una Waifu de estos animes:</h2>

     { lastWaifus < 26 && < h2 className="text-2xl uppercase text-red-700 font-black pt-5 text-center">Waifus Restantes: { lastWaifus }</h2> }
     
     <Carrusel />
    
     <Cards />

      <VentanaFlotante />

      <hr className='mb-5' />

    <NextRival />
    
    <ToastContainer />

    </>
  )
}
