import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../index.js";

function Footer() {
    return (
    <>
    <div>
         <footer className="flex items-center justify-around bg-white bg-opacity-90 px-50 py-5 font-semibold">

            <div className="flex items-center">
                <Link to="/" className="flex items-center">
                    <Logo />
                </Link>
            </div>
            

            <div className="flex items-center justify-around gap-4">
                <p className="text-md">
                    Copyright &copy; | 2024 in.pinterest.com | All rights reserved.
                </p>
            </div>
         </footer>
    </div>
    </>
  );
}

export default Footer;
