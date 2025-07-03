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