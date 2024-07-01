import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import LoginPage from "../Pages/Login/LoginPage";
import SingUp from "../Pages/Login/SingUp";
import Creator from "../Pages/Creator/Creator";
import ForgatePassword from "../Pages/Login/ForgatePassword";
import DashbordLayout from "../Layout/DashbordLayout";
import AdminHome from "../Pages/Dashbord/Admin/AdminHome";
import DashboardPrivate from "../Private/DashboardPrivate";
import BlogOne from "../Pages/BlogOne/BlogOne";
import BlogManage from "../Pages/Dashbord/Admin/BlogManage";
import Private from "../Private/Private";
import UserTable from "../Pages/Dashbord/Admin/UserTable";

import Inbox from "../Pages/Inbox/Inbox";
import InboxUser from "../Pages/Inbox/InboxUser";
import CreateRoom from "../Pages/Dashbord/Admin/CreateRoom";
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/creator',
            element:<Creator></Creator>
        },
        {
          path:'/message',
          element:<Private><Inbox></Inbox></Private>
        },
        {
            path:'/blog/:id',
            element:<BlogOne></BlogOne>,
            loader:({params})=>fetch(`https://codeblog-server.vercel.app/api/v1/blog/${params.id}`)
        },
        {
          path:'/inbox/:id',
          element:<Private><InboxUser></InboxUser></Private>,
          loader:({params})=>fetch(`https://codeblog-server.vercel.app/api/v1/room/${params.id}`)
       }
      ]
    },

{
  path:'dashboard',
  element:<DashboardPrivate><DashbordLayout></DashbordLayout></DashboardPrivate>,
  children:[

    {
      path:'adminhome',
      element:<DashboardPrivate><AdminHome></AdminHome></DashboardPrivate>
    },
    {
      path:'manage',
      element:<DashboardPrivate><BlogManage></BlogManage></DashboardPrivate>
    },
    {
      path:'usermanage',
      element:<DashboardPrivate><UserTable></UserTable></DashboardPrivate>
    },
    {
      path:'createRoom',
      element:<DashboardPrivate><CreateRoom></CreateRoom></DashboardPrivate>
    }

  ]

},

    {
      path:'login',
      element:<LoginPage></LoginPage>,
    },
    {
      path:'singup',
      element:<SingUp></SingUp>
    },
    {
      path:'reset-password',
      element:<ForgatePassword></ForgatePassword>
  },
  ]);