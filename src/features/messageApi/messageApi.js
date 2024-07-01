import { apiSlice } from "../Api/apiSlice";

const messageApi=apiSlice.injectEndpoints({
    endpoints:(builder)=>({
    sendMessage:builder.mutation({
        query:(data)=>({
           
            url:'/api/v1/message',
            method:"POST",
            body:data

        }),
        invalidatesTags:['message']
    }),
    getMessage:builder.query({
        query:()=>({
            url:'/api/v1/message'
        }),
        providesTags:['message']
    })
    })
})

export const {useSendMessageMutation,useGetMessageQuery}=messageApi