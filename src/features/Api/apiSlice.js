import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const apiSlice=createApi({
    reducerPath: 'apiSlice',
    tagTypes:['post','comment','user','message','room'],
    baseQuery:fetchBaseQuery({
        baseUrl:'https://codeblog-server.vercel.app'
    }),
    endpoints:(builder)=>({
             
    })
})