import { useState } from "react"
import { toast } from "react-toastify"
import { useWaifuStore } from "../store"

type GameNumbersProps = {
    waifuLevel: number
}

export default function GameNumbers( { waifuLevel } : GameNumbersProps  ) {

    const [ waifuValores , setWaifuValores ] = useState( [ 'X' , 'X', 'X' ] )
    const [ rivalValores , setRivalValores ] = useState( [ 'X' , 'X', 'X' ] )

    const { level ,  rival , lastWaifus , ordenaAnime , setLevel  , resetCurrentWaifu , setModal , setWaifuList , setAnime , setModalFinal } = useWaifuStore()

    const waifuArray = waifuLevel.toString().split('').map(Number) // = [ 1 , 5 , 8 ] dependiendo de la waifu
    const rivalArray = rival.level.toString().split('').map(Number) //  = [ 8 , 4 , 2 ] dependiendo de la rival

        const rivalRandom  = () => {
        const index_ = Math.floor( Math.random() *rivalArray.length )
        const valor = rivalArray[index_]
        const valor_ = valor.toString() 
  
        return { valor_ , index_ }
    }

        const handleGame = ( index: number , option : string ) => {
        const nuevosValores = [ ...waifuValores ]
        nuevosValores[ index ] = option
        setWaifuValores( nuevosValores )

        const result = rivalRandom()
        const { valor_ , index_ } = result
        const nuevosValoresRival = [ ...rivalValores ]
        nuevosValoresRival[ index_ ] = result.valor_
        setRivalValores( nuevosValoresRival ) 

        if( Number( option ) > Number( result.valor_ ) ){

            toast.success(
                <div className="flex items-center gap-4">
                        <div>
                        <h1 className="font-bold text-white">{ option } le gana a { valor_ }</h1>
                        <h3 className="text-sm text-gray-200">¡Excelente la derrotaste!</h3>
                        </div>
                    </div> ,{
                position: 'bottom-left',
                theme: "dark",
                autoClose: 2000,
                hideProgressBar: true
            })

            setLevel( level + 30 )

            setTimeout( () => {
                setModal(false)
                resetCurrentWaifu()
                setWaifuList( rival.id )
                ordenaAnime()
                console.log( 'voy a disparar en ' , lastWaifus )
                
                if( lastWaifus == 1 ){

                  setModalFinal( true )

                  toast.success(
                    <div className="flex items-center gap-4 cursor-pointer" onClick={() => setAnime( rival.anime )}>
                        <img src={ rival.img } alt="Waifu" className="w-12 rounded-xl" />
                        <div>
                        <div className="font-bold text-white">¡Felicidades!</div>
                        <div className="text-sm text-gray-200">¡Terminaste el juego!</div>
                        </div>
                    </div> ,{
                    position: 'top-center',
                    theme: "colored",
                    autoClose: 5000,
                    hideProgressBar: true
                })

                }else{

                  toast.success(
                    <div className="flex items-center gap-4 cursor-pointer" onClick={() => setAnime( rival.anime )}>
                        <img src={ rival.img } alt="Waifu" className="w-12 rounded-xl" />
                        <div>
                        <div className="font-bold text-white">¡Felicidades!</div>
                        <div className="text-sm text-gray-200">Ya puedes jugar con { rival.name }</div>
                        </div>
                    </div> ,{
                    position: 'bottom-center',
                    theme: "dark",
                    autoClose: 5000,
                    hideProgressBar: true
                })

                }

            },800)

        }else{
            toast.warning(
                    <div className="flex items-center gap-4">
                        <div>
                        <h1 className="font-bold text-white">{ option } no le gana a { valor_ }</h1>
                        <h3 className="text-sm text-gray-200">¡Fallaste, prueba otra vez!</h3>
                        </div>
                    </div> ,{
                position: 'bottom-right',
                theme: "dark",
                autoClose: 2000,
                hideProgressBar: true
            })

            setTimeout( () => { 
              setWaifuValores( [ 'X' , 'X', 'X' ] ) 
              setRivalValores( [ 'X' , 'X', 'X' ] ) 
            },500)
        }

    }

  return (
    <>
    <div className="flex flex-col w-full items-center bg-white rounded-xl p-4 border-b-2 border-white mr-5">
                    
                    <div className="flex gap-4 justify-center">
                      <input
                        type="text"
                        className={`w-16 h-16 text-center border-2 border-gray-400 rounded-md text-xl font-bold cursor-pointer hover:bg-gray-200 ${ waifuValores[0] !== 'X' ? 'text-black' : 'text-gray-300' }`}
                        value={waifuValores[0]}
                        readOnly={true}
                        onClick={() => handleGame( 0 , waifuArray[0].toString() )}
                      />
                      <input
                        type="text" 
                        className={`w-16 h-16 text-center border-2 border-gray-400 rounded-md text-xl font-bold cursor-pointer hover:bg-gray-200 ${ waifuValores[1] !== 'X' ? 'text-black' : 'text-gray-300' }`}
                        value={waifuValores[1]}
                        readOnly={true}
                        onClick={() => handleGame( 1 , waifuArray[1].toString() )}
                      />
                      <input
                        type="text"
                        className={`w-16 h-16 text-center border-2 border-gray-400 rounded-md text-xl font-bold cursor-pointer hover:bg-gray-200 ${ waifuValores[2] !== 'X' ? 'text-black' : 'text-gray-300' }`}
                        value={waifuValores[2]}
                        readOnly={true}
                        onClick={() => handleGame( 2 , waifuArray[2].toString() )}
                      />
                    </div>

    </div>
    <div className="flex flex-col w-full items-center bg-white rounded-xl p-4 border-b-2 border-white ml-5">
                    
                    <div className="flex gap-4 justify-center">
                      <input
                        type="text"
                        className={`w-16 h-16 text-center border-2 border-gray-100 rounded-md text-xl font-bold ${ rivalValores[0] !== 'X' ? 'text-black' : 'text-gray-300' }`}
                        value={rivalValores[0]}
                        readOnly={true}
                      />
                      <input
                        type="text"
                        className={`w-16 h-16 text-center border-2 border-gray-100 rounded-md text-xl font-bold ${ rivalValores[1] !== 'X' ? 'text-black' : 'text-gray-300' }`}
                        value={rivalValores[1]}
                        readOnly={true}
                      />
                      <input
                        type="text"
                        className={`w-16 h-16 text-center border-2 border-gray-100 rounded-md text-xl font-bold ${ rivalValores[2] !== 'X' ? 'text-black' : 'text-gray-300' }`}
                        value={rivalValores[2]}
                        readOnly={true}
                      />
                    </div>

    </div>
    </>
    
  )
}
