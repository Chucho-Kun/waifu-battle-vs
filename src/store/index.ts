import { create } from "zustand";
import { WaifubotDB, type WaifubotDBType } from "../data/db";
import { toast } from "react-toastify";
import { devtools } from "zustand/middleware";

 export type WaifuState = {
    waifuListFull: WaifubotDBType[]
    setWaifuList: ( id : number ) => void
    anime: string
    setAnime: ( anime : string ) => void
    currentWaifu: WaifubotDBType[]
    resetCurrentWaifu: () => void
    modal: boolean
    setModal: ( estado : boolean ) => void
    level: number,
    setLevel: ( level : number ) => void
    allWaifus: boolean
    setAllWaifus: ( allWaifus : boolean ) => void
    challenger: string
    setChallenger: ( challenger : string ) => void
    rival: WaifubotDBType
    lastWaifus: number
    setRival: () => void
    selectWaifu: ( idWaifu : number ) => void
    availableAnimes: WaifubotDBType[]
    ordenaAnime: () => void
    animesperYear: () => void
    modalFinal: boolean
    setModalFinal: ( modalFinal : boolean ) => void
}

export const useWaifuStore = create<WaifuState>()(
    devtools( ( set , get ) => ({
    waifuListFull: WaifubotDB,
    setWaifuList: ( id ) => {
        set( ( state ) => ({
            waifuListFull: state.waifuListFull.map( waifu => waifu.id === id ? { ...waifu , seleccionable: true } : waifu )
        })) 
    },
    anime: '',
    setAnime: ( anime ) => {
        set( { anime } )
    },
    currentWaifu: [],
    resetCurrentWaifu: () => {
        set( { currentWaifu : [] } )
    },
    modal: false,
    setModal: ( modal ) => {
        set( { modal } )
        if( modal ){
            toast.warning( 'Elije una de las casillas de tu Waifu!' ,{
                position: 'top-left',
                theme: "dark",
                autoClose: 3000,
                hideProgressBar: true
            })
        }
    },
    level: 680, //680
    setLevel: ( level ) => {
        set( { level } )
    },
    allWaifus: false,
    setAllWaifus: ( allWaifus ) => {
        set( { allWaifus } )
    },
    challenger: 'x',
    setChallenger: ( challenger ) => {
        set( { challenger } )
    },
    rival:null,
    lastWaifus: 100,
    setRival: () => {
        
        const hiddenWaifus = get().waifuListFull.filter( waifu => !waifu.seleccionable )
        set( { lastWaifus : hiddenWaifus.length } )
        //console.log( {hiddenWaifus} )
        const sortbyLevel = hiddenWaifus.sort( (a,b) => a.level - b.level )
        set({ rival :  sortbyLevel[0] }) 
        
    },
    selectWaifu: ( idWaifu ) => {
        const currentWaifu = get().waifuListFull.map( waifu => idWaifu === waifu.id ? waifu : null ).filter( waifu => waifu !== null )
        set( { currentWaifu } )
        get().setRival()
        toast.success( `Has seleccionado a ${ currentWaifu[0].name }!` , {
            position: 'top-center',
            theme: "dark",
            autoClose: 2000,
            hideProgressBar: true
        })
    },
    availableAnimes: [],
    ordenaAnime: () => {
        const availableAnimes = get().waifuListFull
            .filter( w => w.seleccionable )
            .filter( ( waifu , index , self ) => self.findIndex( w => w.anime === waifu.anime ) === index )

        set( { availableAnimes } )
    },
    animesperYear: () => {
        const availableAnimes = get().availableAnimes.sort( ( a , b ) => Number( a.year ) - Number( b.year ) ) 
        set( { availableAnimes } )
    },
    modalFinal: false,
    setModalFinal: ( modalFinal ) => {
        set( { modalFinal } )
    }

}) ))

/** //const animes = WaifubotDB.filter( ( waifu , index , self ) => self.findIndex( w => w.anime === waifu.anime ) === index)
    //const animesbyYear = animes.sort( (a,b) => Number(a.year) - Number(b.year) ) */

/**const handleCharacter = ( idWaifu : number ) => {
        const waifuData = waifuListFull.map( waifu => idWaifu === waifu.id ? waifu : null ).filter( waifu => waifu !== null ) 
        addCurrentWaifu( waifuData )
        setRival()
    } */
  
  
  
        //const [ allWaifus , setAllWaifus ] = useState( false )