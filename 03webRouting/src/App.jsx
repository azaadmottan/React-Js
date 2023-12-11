import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
import UserContextProvider from "./Context/UserContextProvider";

function App() {
   return (
      <>
            <Header />

               <UserContextProvider>
                  <Outlet />
               </UserContextProvider>
               
            <Footer />
      </>
   );
}

export default App;
