import { Link } from "react-router-dom";

export default function Portada() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('ring.jpg')" }}
    >
      <div className="bg-white bg-opacity-70 p-8 rounded-xl flex flex-col items-center gap-6">
        <Link 
          to="/battle"
          className="w-48 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors cursor-pointer text-center uppercase"
          >
          iniciar una partida / continuar partida
        </Link>
        
        <Link 
          to="/waifus"
          className="w-48 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors cursor-pointer text-center uppercase"
          >
          ver lista de waifus
        </Link>

        <button className="w-48 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors cursor-pointer">
          REINICIAR JUEGO
        </button>
      </div>
    </div>
  );
}