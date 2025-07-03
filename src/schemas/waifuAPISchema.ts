import { z } from 'zod'

export const API_Schema = z.object({
   status:z.string(),
   data:z.object({
    content:z.string(),
    anime:z.object({
        id:z.number(),
        name:z.string(),
        altName:z.string()
    }),
    character:z.object({
        id:z.number(),
        name:z.string()
    })
   })
})


/**
 *  data
anime: {id: 188, name: 'One Punch Man', altName: 'One Punch Man'}
character: {id: 213, name: 'Saitama'}
content: "I'm just a guy who's a hero for fun."
status:"success" */

/**
 * zod
 
 {
    "success": true,
    "data": {
        "status": "success",
        "data": {
            "content": "There are some things in life that will only be understood through words.",
            "anime": {
                "id": 538,
                "name": "Fullmetal Alchemist",
                "altName": "Fullmetal Alchemist"
            },
            "character": {
                "id": 1885,
                "name": "Winry Rockbell"
            }
        }
    }
}
 */