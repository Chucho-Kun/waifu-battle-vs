import { useWaifuStore } from "../store";

export default function Carrusel() {

    const { ordenaAnime , availableAnimes , setAnime , anime , animesperYear } = useWaifuStore()
    availableAnimes.length == 0 && ordenaAnime()

  return (
    <>
     <div className="w-full overflow-x-auto">
      <div className="flex flex-row gap-4 p-4">
        {availableAnimes.map( animeFiltrado => (
            
          <button
            key={ animeFiltrado.anime }
            className={`min-w-[220px] ${ anime == animeFiltrado.anime ? 'bg-gray-100' : 'bg-white' } rounded shadow p-6 flex-shrink-0 cursor-pointer hover:bg-gray-100 transition-colors`}
            onClick={() => setAnime( animeFiltrado.anime )}    
          >
            <h2 className="text-xl font-bold mb-2">{ animeFiltrado.anime }</h2>
            <p className="text-white bg-amber-700">{ animeFiltrado.year}</p>
            <p className="text-gray-600">{ animeFiltrado.company }</p>
          </button>
          
        ))}
      </div>
    </div>
    <div className="flex gap-4 justify-center">
     <button className='uppercase cursor-pointer bg-gray-100 hover:bg-gray-200 text-gray-500 p-2 rounded-md' onClick={ () => ordenaAnime() } >Orden original</button>
     <button className='uppercase cursor-pointer bg-gray-100 hover:bg-gray-200 text-gray-500 p-2 rounded-md' onClick={ () => animesperYear() } >Ordenar por lanzamiento</button>
    </div>
    </>
  )
}
