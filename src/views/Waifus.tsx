import { useEffect } from 'react';
import Cards from '../components/Cards';
import VentanaFlotante from '../components/VentanaFlotante';
import { useWaifuStore } from '../store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Waifus() {

  const { anime , currentWaifu , setAllWaifus , rival , lastWaifus } = useWaifuStore()

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
    
    <ToastContainer />

    </>
  )
}
