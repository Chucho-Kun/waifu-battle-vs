import { useWaifuStore } from "../store"

export default function Cards() {
    
    const { anime , currentWaifu , waifuListFull , selectWaifu } = useWaifuStore()

    const elegida = currentWaifu.length ? currentWaifu[0] : { id: 0, name: '', anime: '', year: '', company: '', img: '', level: 0 } 

  return (
       <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
      {waifuListFull.map((waifu, i) => (
        ( anime === 'TODOS' || waifu.anime === anime) &&
        <button 
            key={i} 
            disabled={!waifu.seleccionable}
            className={` ${ elegida.id == waifu.id ? 'bg-gray-100' : 'bg-white' }  rounded shadow p-6 flex flex-row items-center ${ !waifu.seleccionable ? 'opacity-30 cursor-default' : 'cursor-pointer hover:bg-gray-100 transition-colors' }`} 
            onClick={() => selectWaifu( waifu.id )}
            >
          
          <div className="w-24 h-32 bg-gray-200 rounded-md overflow-hidden flex-shrink-0 flex items-center justify-center mr-4">
            <img
              src={waifu.img}
              alt={waifu.name}
              className="object-cover w-full h-full"
            />
          </div>
          
          <div className="flex flex-col justify-center h-full">
            <h1 className="text-xl font-bold mb-2 text-pink-800">{waifu.name}</h1>
            <h2 className="text-black">{waifu.anime}</h2>
            <p className="text-gray-500 italic">{waifu.company} - {waifu.year}</p>
          </div>
        </button>
      ))}
    </div>
  )
}
