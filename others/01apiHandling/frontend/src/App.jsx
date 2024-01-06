import { useState, useEffect, isValidElement } from "react";
import "./App.css";
import axios from "axios";

function App() {
   const [data, setData] = useState([]);
   const [error, setError] = useState(false);
   const [loading, setLoading] = useState(false);


   useEffect(() => {

      ;(async () => {
         try {
            
            setError(false);
            setLoading(true);

            const response = await axios.get("/api/userData");

            setLoading(false);
            setData(response.data);
         } catch (error) {
            
            setLoading(false);
            setError(true);

            console.log(`Something went wrong while fetching data from backend.\nError: ${error}`);         
         }
      })();
   }, []);

   if(error) {
      return <h2>Something went wrong while fetching data from backend.</h2>
   }

   if(loading) {
      return <>
      <h1>
         Loading...
      </h1>

      <p style={{fontSize: "20px"}}>Please wait data fetching.</p>

      </>
   }
   

   return (
      <>
         <h2>Fetch data from custom backend service</h2>

         <p style={{ fontSize: "20px" }}>
         and they further fetch data from other backend online service.
         </p>

         <h3>Length of the data fetched: {data.length}</h3>

         <h4>Fetched Data</h4>
         <ul>

         {
            data.map((obj, index) => (
               <li key={index}>
               {
                  Object.entries(obj).map(([key, value]) => (
                     <span key={key}>
                        {key}: {value}
                     </span>
                  ))
               }
               </li>
            ))
         }
         </ul>
      </>
   );
}

export default App;
