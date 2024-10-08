import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Login, ProtectRoutes, SignUp } from "./components/index.js";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Blog from "./pages/Blog.jsx";
import Business from "./pages/Business.jsx";
import Explore from "./pages/Explore.jsx";
import Watch from "./pages/Watch.jsx";
import Today from "./pages/Today.jsx";
import AddNewPost from "./pages/AddNewPost.jsx";
import Post from "./pages/Post.jsx";
import AllPosts from "./pages/AllPosts.jsx";
import EditPost from "./pages/EditPost.jsx";


const router = createBrowserRouter([

   {
      path: "/",
      element: <App />,
      children: [
         {
            path: "/",
            element: <Home />,
            
         },
         {
            path: "/today",
            element: <Today />,
            
         },
         {
            path: "/watch",
            element: <Watch />,
            
         },
         {
            path: "/explore",
            element: <Explore />,
            
         },
         {
            path: "/about",
            element: <About />,
            
         },
         {
            path: "/business",
            element: <Business />,
            
         },
         {
            path: "/blog",
            element: <Blog />,
            
         },
         {
            path: "/signUp",
            element: (
               <ProtectRoutes authentication={false} >
                  <SignUp />
               </ProtectRoutes>
            )
         },
         {
            path: "/login",
            element: (
               <ProtectRoutes authentication={false}>
                  <Login />
               </ProtectRoutes>
            )
         },
         {
            path: "/all-posts",
            element: (
               <ProtectRoutes authentication>
                  <AllPosts />
               </ProtectRoutes>
            )
         }, 
         {
            path: "/add-new-post",
            element: (
               <ProtectRoutes authentication>
                  <AddNewPost />
               </ProtectRoutes>
            )
         }, 
         {
            path: "/edit-post/:slug",
            element: (
               <ProtectRoutes authentication>
                  <EditPost />
               </ProtectRoutes>
            )
         }, 
         {
            path: "/post/:slug",
            element: (
               <ProtectRoutes authentication>
                  <Post />
               </ProtectRoutes>
            )
         }
      ]
   }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
   
   <React.StrictMode>
      
      <Provider store={store}>

         <RouterProvider router={router} />

      </Provider>

   </React.StrictMode>
);
