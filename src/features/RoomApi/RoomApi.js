import { apiSlice } from "../Api/apiSlice";

const roomApi=apiSlice.injectEndpoints({
    endpoints:(builder)=>({
    createRoom:builder.mutation({
        query:(data)=>({
           
            url:'/api/v1/room',
            method:"POST",
            body:data

        }),
        invalidatesTags:['room']
    }),
    getRoom:builder.query({
        query:()=>({
            url:'/api/v1/room'
        }),
        providesTags:['room']
    })
    })
})

export const {useCreateRoomMutation,useGetRoomQuery}=roomApi