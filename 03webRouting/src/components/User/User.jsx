import React from "react";
import { useParams } from "react-router-dom";

const User = () => {

   const { userId } = useParams();

   return (
      <>

         <div className=" w-6/12 mx-auto my-8 bg-gray-600 text-white text-3xl px-5 py-6 rounded">
            <div className="text-center mb-4">
               Welcome to code Master
            </div>
            <div>
               Search User-Id: <span className="text-orange-300">{userId}</span>
            </div>
         </div>
      </>
   );
};

export default User;
