import { NavLink } from "react-router-dom";
import { useWaifuStore } from "../store";

export default function Header() {

    const { setAnime , waifuListFull } = useWaifuStore()

  return (
    <>
        <div className="text-3xl text-center bg-pink-700 p-10 text-white font-black">
            WAIFU BATTLE VS
            <div>
            <span className="block text-pink-200 text-xs">v.1.2.0</span>
            </div>

        </div>
        <nav className="flex justify-center">
                <NavLink
                    to="/"
                    className={ ( {isActive}) => isActive ? 'text-pink-700 uppercase font-bold m-2 text-base' : 'text-pink-400 uppercase font-bold m-2 text-base' }
                >Inicio</NavLink>

                <NavLink
                    to="/battle"
                    className={ ( {isActive}) => isActive ? 'text-pink-700 uppercase font-bold m-2 text-base' : 'text-pink-400 uppercase font-bold m-2 text-base' }
                    onClick={ () => setAnime( waifuListFull[0].anime )}
                    
                >Batalla</NavLink>

                <NavLink
                    to="/waifus"
                    className={ ( {isActive}) => isActive ? 'text-pink-700 uppercase font-bold m-2 text-base' : 'text-pink-400 uppercase font-bold m-2 text-base' }
                    onClick={ () => setAnime('TODOS') }
                >Waifus</NavLink>
            </nav>

            <hr />
    </>    
  )
}
