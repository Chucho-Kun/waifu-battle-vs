import { useWaifuStore } from "../store";

export default function VentanaFinal() {

    const { modalFinal , rival } = useWaifuStore()

   if (!modalFinal) return null;
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
        
        <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center relative min-w-[320px]">
     
            <div>
                <div className="text-2xl text-red-700 uppercase text-center font-black">¡Derrotaste a todas las Waifus!</div>
                <div className="text-xl text-red-700 uppercase text-center ">¡Muchas gracias por jugar</div>
            </div> 
        
          <div className="flex justify-between items-center w-full">
                         
                  <div className="flex flex-col items-center bg-white rounded-xl border-2 p-4 border-pink-200 w-full">
                      <img
                      src={ rival.img }
                      alt="nombre wifu final" 
                      className="w-50 h-full object-cover rounded-xl mb-2"
                      />
                      <h2 className="text-lg font-bold text-pink-700">{ rival.name }</h2>
                      <h5 className="font-bold text-black">{ rival.anime }</h5>
                      <h5 className="font-bold text-black">{ rival.company }</h5>
                      <p className="text-white bg-amber-700">{ rival.year}</p>
                      <h5 className="font-bold text-black">Lv. { rival.level }</h5>
                      
                  </div>
        
          </div>

        </div>
      </div>
    )
}
