import React, { useEffect, useState } from "react";
import { Footer, Header, Loading } from "./components/index.js";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import authService from "./services/authService";
import { login, logout } from "./slicer/authSlicer";


function App() {

   const [loading, setLoading] = useState(true);

   const dispatch = useDispatch();

   useEffect(() => {

      authService.getCurrentUser()
      .then((userData) => {
   
         if(userData) {
   
            dispatch(login());
         }
         else {
   
            dispatch(logout());
         }
      })
      .finally(() => setLoading(false));

   }, []);
   

   return (!loading) ? (<>

      <Header />

         <main>

            <Outlet />

         </main>

      <Footer />

   </>) : (<Loading />);

}

export default App;
