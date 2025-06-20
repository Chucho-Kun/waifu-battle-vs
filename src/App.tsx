import { useEffect } from 'react';
import Cards from "./components/Cards";
import Carrusel from "./components/Carrusel";
import VentanaFlotante from './components/VentanaFlotante';
import { useWaifuStore } from './store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const { anime , setModal, currentWaifu , setAllWaifus , allWaifus , setAnime , rival } = useWaifuStore()

useEffect( () => {
    const buttonAllWaifus = anime === 'TODOS' ? true : false
     setAllWaifus( buttonAllWaifus )
  } , [ anime ])

  return (
    <>
     <div className="text-3xl text-center bg-pink-700 p-10 text-white font-black">WAIFU BATTLE VS</div>
     <h2 className="text-2xl text-black font-bold p-4 ">Selecciona una Waifu de estos animes:</h2>
     <Carrusel />

     <Cards />

  {/*<div className="container mx-auto">
     <div className='flex justify-center items-center'>
        <button 
          disabled={ allWaifus }
          className={`bg-indigo-600 rounded-xl p-3 text-white uppercase font-bold hover:bg-indigo-700 transition-colors w-2xl ${ allWaifus ? 'opacity-50 cursor-default' : 'cursor-pointer' }`}
          onClick={ () => setAnime( 'TODOS' ) }
          >VER TODAS LAS WAIFUS
        </button>
     </div>
  </div>  */}

      <VentanaFlotante />

    <div className='flex justify-center items-center'>
        <button 
          disabled={currentWaifu.length < 1}
          className={`mb-20 rounded-xl p-3 text-white uppercase font-bold w-2xl ${ currentWaifu.length < 1 ? 'opacity-50 cursor-default bg-gray-600' : 'cursor-pointer bg-indigo-600 hover:bg-indigo-700 transition-colors' }`}
          onClick={ () => setModal( true ) }
          >{ currentWaifu.length < 1 ? 'selecciona una waifu' : `¡${ rival.name } TE RETA A DUELO!` }
        </button>


         {/*<button 
          className={`mb-20 rounded-xl p-3 text-white uppercase font-bold w-2xl ${ character.length < 1 ? 'opacity-50 cursor-default bg-gray-600' : 'cursor-pointer bg-indigo-600 hover:bg-indigo-700 transition-colors' }`}
          onClick={ () => console.log( waifuSelected ) }
          >MIRAR WAIFUS SELECCIONADAS
        </button> */}

    </div>
    
    <ToastContainer />

    </>
  )
}

export default App
