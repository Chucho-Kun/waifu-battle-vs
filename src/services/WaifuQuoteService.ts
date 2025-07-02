import axios from "axios"

export async function waifuQuote( character : string ){

    const url = `https://api.animechan.io/v1/quotes/random?character=${ character }`;
    try{
        const { data } = await axios( url )
        console.log( '***' , data )
        return data.status === "success" ? data.data.content+' - '+data.data.character.name : '* Solo la mira sin decir nada *'
        
    } catch( error ) {
        console.log( '---' , error )
        return 'La API no conecta en este momento'
    }
}
/**
anime: {id: 188, name: 'One Punch Man', altName: 'One Punch Man'}
character: {id: 213, name: 'Saitama'}
content: "I'm just a guy who's a hero for fun."
status:"success"
 */