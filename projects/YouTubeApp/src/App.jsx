import React from 'react'
import Home from "./pages/Home";
import Search from "./pages/Search";
import Watch from "./pages/Watch";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {

   return (
      
      <>
         <div className="w-full bg-zinc-900 text-white">
         <BrowserRouter>
         <Routes>
               <Route path="/" element={<Home/> } />
               <Route path="/search" element={<Search/> } />
               <Route path="/watch/:id" element={<Watch/> } />
         </Routes>
         </BrowserRouter>
         </div>
      </>
   );
}

export default App;
