import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../Context/UserContext";

const Signup = () => {
   
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");

   const {setUser} = useContext(UserContext);

   const handleLogin = (e) => {

      e.preventDefault();

      setUser({username, password});
   }

   return (
   <>
      <div
        className="w-80 bg-slate-300 px-8 py-6 mx-auto my-6 rounded-lg"
        style={{ width: "40%" }}
      >
        <div className="px-4 py-3 bg-slate-100 rounded-sm">
          <h3 className="text-center text-3xl font-bold mb-7 ">SignUp Now</h3>

          <div className="form-control mt-5">
            <input
              type="text"
              placeholder="Create Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{ width: "100%" }}
              className="mt-2 py-2 px-3 text-lg rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
            />
          </div>
          <div className="mt-5">
            <input
              type="text"
              placeholder="Create Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: "100%" }}
              className="mt-2 py-2 px-3 text-lg rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
            />
          </div>
          <div className="mt-5">
            <input
              type="text"
              placeholder="Confirm Password"
              style={{ width: "100%" }}
              className="mt-2 py-2 px-3 text-lg rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
            />
          </div>
          <div className="mt-5">
            <p className="text-lg font-medium">
              Don't have an Account{" "}
              <Link to="/login" className="text-blue-700 hover:underline">
                Login
              </Link>{" "}
              Now
            </p>
          </div>
          <div className="mt-5">
            <input
              type="submit"
              value="Login"
              onClick={handleLogin}
              className="bg-blue-600 text-white font-semibold tracking-wide text-lg px-4 py-1 rounded transition delay-75 hover:bg-black cursor-pointer"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
