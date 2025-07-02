import { useEffect } from 'react';
import Cards from '../components/Cards';
import VentanaFlotante from '../components/VentanaFlotante';
import { useWaifuStore } from '../store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Waifus() {

  const { anime , currentWaifu , setAllWaifus , rival , lastWaifus , setModal } = useWaifuStore()

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

   {currentWaifu.length > 0 && (
  <>
    <div className="flex justify-center items-center">
      <div className="flex gap-8 bg-white rounded p-6 items-center transition-colors">
        {/* Imagen de la waifu seleccionada */}
        <div className="bg-gray-200 rounded-md overflow-hidden flex-shrink-0 flex items-center justify-center">
          <img
            src={currentWaifu[0]?.img || ''}
            alt={currentWaifu[0]?.name || 'Waifu'}
            className="w-40 h-20 object-cover object-center rounded-xl shadow"
          />
        </div>
        {/* Imagen del rival */}
        <div className="text-3xl font-black text-pink-700 px-4 select-none">VS</div>
        <div className="bg-gray-200 rounded-md overflow-hidden flex-shrink-0 flex items-center justify-center">
          <img
            src={rival?.img || ''}
            alt={rival?.name || 'Rival'}
            className="w-40 h-20 object-cover object-center rounded-xl shadow"
          />
        </div>
      </div>
    </div>

    <div className="flex justify-center items-center">
      <button
        disabled={currentWaifu.length < 1}
        className={`mt-4 mb-20 rounded-xl p-3 text-white uppercase font-bold w-[340px] ${
          currentWaifu.length < 1
            ? 'opacity-50 cursor-default bg-gray-600'
            : 'cursor-pointer bg-indigo-600 hover:bg-indigo-700 transition-colors'
        }`}
        onClick={() => setModal(true)}
      >
        {currentWaifu.length === 0 ? 'selecciona una waifu' : 'retar a duelo'}
      </button>
    </div>
  </>
)}
    
    <ToastContainer />

    </>
  )
}
