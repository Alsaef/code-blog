import { apiSlice } from "../Api/apiSlice"


const authApi=apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        createUser:builder.mutation({
            query:(data)=>({
                method:"POST",
                url:'/api/v1/user',
                body:data
            }),
            invalidatesTags:['user']
        }) ,
        getUsers:builder.query({
            query:()=>({
                url:'/api/v1/users'
            }),
            providesTags:['user']
        })   

    })
})


export const {useCreateUserMutation,useGetUsersQuery}=authApi