import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Getstarted from "./components/GetStarted/Getstarted.jsx";
import Github from "./components/Github/Github.jsx";
import Login from "./components/Login/Login.jsx";
import Signup from "./components/Signup/Signup.jsx";
import User from "./components/User/User.jsx";
import "./index.css";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

// const router = createBrowserRouter ([
//     {
//         path: "/",
//         element: <App />,
//         children: [
//             {
//                 path: "/",
//                 element: <Home />
//             },
//             {
//                 path: "about",
//                 element: <About />
//             },
//             {
//                 path: "contactUs",
//                 element: <Contact />
//             },
//             {
//                 path: "github",
//                 element: <Github />
//             },
//             {
//                 path: "getStarted",
//                 element: <Getstarted />
//             },
//             {
//                 path: "/login",
//                 element: <Login />,
//             },
//             {
//                 path: "/signup",
//                 element: <Signup />,
//             },
//             {
//                 path: "/",
//                 element: <Login />
//             }
//         ]
//     }
// ]);

const router = createBrowserRouter (

    createRoutesFromElements(
        
        <Route path="/" element={<App />}>

            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contactUs" element={<Contact />} />
            <Route path="getStarted" element={<Getstarted />} />
            <Route path="github" element={<Github />} />
            
            <Route path="login" element={<Login />} >
                    <Route path="signup" element={<Signup />} />
            </Route>

            <Route path="signup" element={<Signup />}>
                    <Route path="login" element={<Login />} />
            </Route>

            <Route path="user/:userId" element={<User />} />

        </Route>
    )
)

ReactDOM.createRoot(document.getElementById("root")).render(

    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>

);
