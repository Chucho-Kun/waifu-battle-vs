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
