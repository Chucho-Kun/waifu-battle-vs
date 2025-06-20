import { useWaifuStore } from "../store";
import GameNumbers from "./GameNumbers";

export default function VentanaFlotante() {

    const { modal , setModal , currentWaifu , rival } = useWaifuStore()

  if (!modal) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center relative min-w-[320px]">
        {/* Botón de cerrar */}
        <button
          className="absolute top-2 right-2 text-white hover:text-red-300 text-2xl cursor-pointer bg-red-900 rounded-full w-8 h-8"
          onClick={() => setModal( false )}
        >
          ×
        </button>
        {/* Fichas encontradas */}
        <div className="flex justify-between items-center w-full">
            { currentWaifu.map( waifu => (
                <div key={waifu.id} className="flex flex-col items-center bg-white rounded-xl border-2 p-4 border-pink-200">
                    <img
                    src={ waifu.img }
                    alt={ waifu.name } 
                    className="w-50 h-full object-cover rounded-xl mb-2"
                    />
                    <h2 className="text-lg font-bold text-pink-700">{ waifu.name }</h2>
                    <h5 className="font-bold text-black">{ waifu.anime }</h5>
                </div>
            ))}
          <div className="text-xl font-bold pt-40 m-5"> VS </div>
          <div className="flex flex-col items-center bg-white rounded-xl border-2 p-4 border-pink-200">
            <img
              src={ rival.img }
              alt={ rival.name }
              className="w-50 h-full object-cover rounded-xl mb-2"
            />
            <h2 className="text-lg font-bold text-pink-700">{ rival.name }</h2>
            <h5 className="font-bold text-black">{ rival.anime }</h5>
          </div>
        </div>

        <div className="flex justify-between items-center w-full">

                <GameNumbers  waifuLevel={ currentWaifu[0].level }  />

        </div>

      </div>
    </div>
  );
}