import axios from "axios"
import { API_Schema } from "../schemas/waifuAPISchema";

export async function waifuQuote( character : string ){

    const url = `https://api.animechan.io/v1/quotes/random?character=${encodeURIComponent(character)}`;
    console.log(url)
    try{
        const { data } = await axios( url ,  { headers: {'x-api-key': import.meta.env.VITE_OPENROUTER_KEY}})
        const result = API_Schema.safeParse( data )
        return result.data?.status ? result.data.data.content +' @ '+ result.data.data.character.name : '* He prepares to attack without showing up *'
        
   } catch( error ) {
        return '>> She just looks at her without saying anything. <<'
    }
}