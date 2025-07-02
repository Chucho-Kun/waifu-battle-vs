import { useEffect } from 'react';
import Cards from '../components/Cards';
import VentanaFlotante from '../components/VentanaFlotante';
import { useWaifuStore } from '../store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NextRival from '../components/NextRival';

export default function Waifus() {

  const { anime , setAllWaifus , lastWaifus } = useWaifuStore()

useEffect( () => {
    const buttonAllWaifus = anime === 'TODOS' ? true : false
     setAllWaifus( buttonAllWaifus )
  } , [ anime ])

  return (
    <>
    
     <h2 className="text-xl uppercase text-black font-bold pt-5 text-center">Lista de las Waifus desbloqueadas:</h2>

     { lastWaifus < 26 && < h2 className="text-2xl uppercase text-red-700 font-black pt-5 text-center">Waifus Restantes: { lastWaifus }</h2> }

     <Cards />

      <VentanaFlotante />

      <hr className='mb-5' />

    <NextRival />
    
    <ToastContainer />

    </>
  )
}
