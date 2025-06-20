import { useEffect } from 'react';
import Cards from "./components/Cards";
import Carrusel from "./components/Carrusel";
import VentanaFlotante from './components/VentanaFlotante';
import { useWaifuStore } from './store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import VentanaFinal from './components/VentanaFinal';

function App() {

  const { anime , setModal, currentWaifu , setAllWaifus , rival , animesperYear , ordenaAnime , lastWaifus } = useWaifuStore()

  //console.log( {lastWaifus} )

useEffect( () => {
    const buttonAllWaifus = anime === 'TODOS' ? true : false
     setAllWaifus( buttonAllWaifus )
  } , [ anime ])

  return (
    <>
    <VentanaFinal />
     <div className="text-3xl text-center bg-pink-700 p-10 text-white font-black">
        WAIFU BATTLE VS
        <div>
          <span className="block text-pink-200 text-xs">v.1.2.0</span>
        </div>
    </div>
     <h2 className="text-2xl uppercase text-black font-bold pt-5 text-center">Selecciona una Waifu de estos animes:</h2>

     { lastWaifus < 26 && < h2 className="text-2xl uppercase text-red-700 font-black pt-5 text-center">Waifus Restantes: { lastWaifus }</h2> }
     
     <Carrusel />
    <div className="flex gap-4 justify-center">
     <button className='uppercase cursor-pointer bg-gray-100 hover:bg-gray-200 text-gray-500 p-2 rounded-md' onClick={ () => ordenaAnime() } >Orden original</button>
     <button className='uppercase cursor-pointer bg-gray-100 hover:bg-gray-200 text-gray-500 p-2 rounded-md' onClick={ () => animesperYear() } >Ordenar por fecha</button>
    </div>
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

      <hr className='mb-5' />

    { currentWaifu.length > 0 && 
    <div className='flex justify-center items-center'>
          <div className="flex items-center gap-4">
            <div className="bg-white rounded p-6 flex flex-row items-center transition-colors">
              <div className="bg-gray-200 rounded-md overflow-hidden flex-shrink-0 flex items-center justify-center mr-4">
                <img src={ currentWaifu.length > 0 ? rival.img : '' } alt="Waifu" className="w-40 h-20 object-cover object-center rounded-xl shadow" />
              </div>
              <div className="flex flex-col justify-center h-full">
                <h2 className="text-center text-lg font-bold text-pink-700">{ currentWaifu.length > 0 && rival.name }</h2>
                <h5 className="text-center font-bold text-black">{ currentWaifu.length > 0 && rival.anime }</h5>
              </div>
            </div>
          </div>
    </div> }

    <div className='flex justify-center items-center'>

        <button 
          disabled={currentWaifu.length < 1}
          className={`mb-20 rounded-xl p-3 text-white uppercase font-bold w-100 ${ currentWaifu.length < 1 ? 'opacity-50 cursor-default bg-gray-600' : 'cursor-pointer bg-indigo-600 hover:bg-indigo-700 transition-colors' }`}
          onClick={ () => setModal( true ) }
          >{ currentWaifu.length == 0 ? 'selecciona una waifu' : 'retar a duelo' }
        </button>

    </div>
    
    <ToastContainer />

    </>
  )
}

export default App
