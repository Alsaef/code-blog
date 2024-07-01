import { apiSlice } from "../Api/apiSlice"

const blogApi=apiSlice.injectEndpoints({
         endpoints:(builder)=>({
            getBlogs:builder.query({
                query:(search)=>({
                    url:`/api/v1/blog/?searchQuery=${search}`
                }),
                providesTags:['post']
            }),
            createBlog:builder.mutation({
                query:(data)=>({
                    url:`/api/v1/blog`,
                    method:'POST',
                    body:data
                }),
                invalidatesTags:['post']
            })
         })
})

export const {useGetBlogsQuery,useCreateBlogMutation}=blogApi