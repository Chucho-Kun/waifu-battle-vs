import { z } from 'zod'

export const API_Schema = z.object({
    /*
    data: z.object({
        status: z.string(),
        content: z.string(),
        character:z.object({
            name: z.string()
        })
    }) */
   status: z.string(),
   content: z.string(),
   character: z.object({
        name:z.string()
   })
})


/**
 *  data
anime: {id: 188, name: 'One Punch Man', altName: 'One Punch Man'}
character: {id: 213, name: 'Saitama'}
content: "I'm just a guy who's a hero for fun."
status:"success" */