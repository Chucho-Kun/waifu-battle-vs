import { NavLink, useLocation } from "react-router-dom";
import { useWaifuStore } from "../store";
import { useMemo } from "react";

export default function Header() {

    const { setAnime , waifuListFull , currentWaifu } = useWaifuStore()
    const { pathname } = useLocation()
    const isHome = useMemo( () => pathname === '/' , [ pathname ] )

  return (
    <>
        <div className="text-3xl text-center bg-pink-700 p-10 text-white font-black">
            WAIFU BATTLE VS
            <div>
            <span className="block text-pink-200 text-xs">v.2.2.2</span>
            </div>

        </div>

            <nav className="flex justify-center bg-black h-10">
             { !isHome && 
        <>
                <NavLink
                    to="/"
                    className={ ( {isActive}) => isActive ? 'text-orange-500 uppercase font-bold m-2 text-base' : 'text-pink-400 uppercase font-bold m-2 text-base' }
                >Inicio</NavLink>

                <NavLink
                    to="/battle"
                    className={ ( {isActive}) => isActive ? 'text-orange-500 uppercase font-bold m-2 text-base' : 'text-pink-400 uppercase font-bold m-2 text-base' }
                    onClick={ () => setAnime( currentWaifu.length > 0 ? currentWaifu[0].anime : waifuListFull[0].anime )}
                    
                >Animes</NavLink>

                <NavLink
                    to="/waifus"
                    className={ ( {isActive}) => isActive ? 'text-orange-500 uppercase font-bold m-2 text-base' : 'text-pink-400 uppercase font-bold m-2 text-base' }
                    onClick={ () => setAnime('TODOS') }
                >Waifus</NavLink>
            
        </> 
        }
        </nav>
            <hr />
    </>    
  )
}
