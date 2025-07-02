import { Link } from "react-router-dom";
import { useWaifuStore } from "../store";
import { WaifubotDB } from "../data/db";

export default function Portada() {

  const { setAnime , resetWaifuList , waifuListFull } = useWaifuStore()

  const restart = () => {
    localStorage.clear()
    resetWaifuList()
    setAnime( WaifubotDB[0].anime )
  }

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('ring.jpg')" }}
    >
      <div className="bg-white bg-opacity-70 p-8 rounded-xl flex flex-col items-center gap-2">
        <Link 
          to="/battle"
          onClick={ () => setAnime( waifuListFull[0].anime )}
          className="w-48 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors cursor-pointer text-center uppercase"
          >
          { localStorage.getItem('waifuListStorage') ? 'continuar partida' : 'iniciar una partida'  }
           
        </Link>
        
        <Link 
          to="/waifus"
          onClick={ () => setAnime('TODOS') }
          className="w-48 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors cursor-pointer text-center uppercase"
          >
          ver lista de waifus
        </Link>

        { localStorage.getItem('waifuListStorage') && 
        <button 
          className="w-48 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
          onClick={restart}
        >
          REINICIAR JUEGO
        </button>
        }
      </div>
    </div>
  );
}