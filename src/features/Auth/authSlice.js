import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateCurrentUser } from 'firebase/auth';
import { auth } from '../../firebase/firebase.config';
const initialState = {
    user: {
        email: '',
        role: ''
    },
    isLoading: true,
    isError: false,
    error:''
}


export const createAccount=createAsyncThunk('auth/createAccount',async({email,password,displayName,photoURL})=>{
      const data=await createUserWithEmailAndPassword(auth,email,password);
    
     return data.user.email
})
export const login=createAsyncThunk('auth/login',async({email,password})=>{
      const data=await signInWithEmailAndPassword(auth,email,password);

      return data.user.email
})
export const getUser=createAsyncThunk('auth/getUser',async(email)=>{
    const res= await fetch(`https://codeblog-server.vercel.app/api/v1/user/${email}`)
    const data=await res.json();

    if (data.status) {
      return data
    }

    return email
})

const authSlice=createSlice({
    name: 'auth',
    initialState,
    reducers:{
      setUser:(state,{payload})=>{
        state.isLoading= false;
        state.user.email=payload,
        state.isError=false
      },
      logout:(state,{payload})=>{
        state.isLoading= false;
        state.user={email:'',role:''},
        state.isError=false
      },
      toggle:(state,{payload})=>{
        state.isLoading= false;
        state.user={email:'',role:''},
        state.isError=false
      }
    },
    extraReducers:(builder)=>{
        // create Account
        builder.addCase(createAccount.pending,(state,{payload})=>{
           state.isLoading=true;
           state.user.email='';
           state.isError=false
        })
        builder.addCase(createAccount.fulfilled,(state,{payload})=>{
         state.isLoading=false;
           state.user.email=payload;
           state.isError=false
        })
        builder.addCase(createAccount.rejected,(state,action)=>{
           state.isLoading=false;
           state.user.email='';
           state.isError=true
           state.error = action.payload.message; 
        })
        // login
        builder.addCase(login.pending,(state,{payload})=>{
           state.isLoading=true;
           state.user.email='';
           state.isError=false
        })
        builder.addCase(login.fulfilled,(state,{payload})=>{
         state.isLoading=false;
           state.user.email=payload;
           state.isError=false
        })
        builder.addCase(login.rejected,(state,action)=>{
           state.isLoading=false;
           state.user.email='';
           state.isError=true
           state.error = action.payload.message; 
        })
        // getUser
        builder.addCase(getUser.pending,(state,{payload})=>{
           state.isLoading=true;
           state.user.email='';
           state.isError=false
        })
        builder.addCase(getUser.fulfilled,(state,{payload})=>{
         state.isLoading=false;
          if (payload.status) {
            state.user=payload.data
          }
          else{
            state.user.email=payload;
           }
           state.isError=false
        })
        builder.addCase(getUser.rejected,(state,action)=>{
           state.isLoading=false;
           state.user.email='';
           state.isError=true
           state.error = action.payload.message; 
        })
    }
})

export const {setUser,logout,toggle}=authSlice.actions
export default authSlice.reducer