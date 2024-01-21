import React from "react";
import { MdHomeFilled } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { RiArrowRightSLine } from "react-icons/ri";
import { MdOutlineHistory } from "react-icons/md";
import { MdOutlineWatchLater } from "react-icons/md";
import { FiThumbsUp } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlinedFlag } from "react-icons/md";
import { IoHelpCircleOutline } from "react-icons/io5";
import { MdOutlineFeedback } from "react-icons/md";

function Sidebar() {

   const mainLinks = [
      {
         icon: <MdHomeFilled className="text-2xl"/>,
         name: "Home"
      },
      {
         icon: <SiYoutubeshorts className="text-2xl"/>,
         name: "Shorts"
      },
      {
         icon: <MdOutlineSubscriptions className="text-2xl"/>,
         name: "Subscriptions"
      }
   ];
   
   const otherLinks = [
      {
         icon: <MdOutlineHistory className="text-2xl"/>,
         name: "History"
      },
      {
         icon: <MdOutlineWatchLater className="text-2xl"/>,
         name: "Watch later"
      },
      {
         icon: <FiThumbsUp className="text-2xl"/>,
         name: "Liked videos"
      }
   ];
   
   const Subscriptions = [
      {
         logo: <FaRegUserCircle className="text-2xl"/>,
         name: "Channel name-1"
      },
      {
         logo: <FaRegUserCircle className="text-2xl"/>,
         name: "Channel name-2"
      },
      {
         logo: <FaRegUserCircle className="text-2xl"/>,
         name: "Channel name-3"
      },
      {
         logo: <FaRegUserCircle className="text-2xl"/>,
         name: "Channel name-6"
      },
      {
         logo: <FaRegUserCircle className="text-2xl"/>,
         name: "Channel name-7"
      },
      {
         logo: <FaRegUserCircle className="text-2xl"/>,
         name: "Channel name-8"
      },
      {
         logo: <FaRegUserCircle className="text-2xl"/>,
         name: "Channel name-4"
      },
      {
         logo: <FaRegUserCircle className="text-2xl"/>,
         name: "Channel name-5"
      }
   ];
   
   const exploreLinks = [
      {
         icon: <IoSettingsOutline className="text-2xl"/>,
         name: "Settings"
      },
      {
         icon: <MdOutlinedFlag className="text-2xl"/>,
         name: "Report history"
      },
      {
         icon: <IoHelpCircleOutline className="text-2xl"/>,
         name: "Help"
      },
      {
         icon: <MdOutlineFeedback className="text-2xl"/>,
         name: "Send feedback"
      }
   ];


   return (
      <div className="w-2/12 h-screen overflow-auto px-4 py-2">
      <ul className="flex flex-col py-2 border-b-[1px] border-gray-100 border-opacity-20">
         {
            mainLinks.map(({icon, name}) => (
               <li key={name} className="px-2 py-2 rounded-xl hover:bg-gray-800">
                  <a href={`/${name}`} className="flex items-center gap-4">
                  {icon}
                  {name}
                  </a>
               </li>
            ))
         }
      </ul>

      <div className="mt-3 px-2 py-2 flex items-center justify-between text-lg cursor-pointer rounded-xl hover:bg-gray-800">
         You <RiArrowRightSLine />
      </div>
      <ul className="flex flex-col py-2 border-b-[1px] border-gray-100 border-opacity-20">
         {
            otherLinks.map(({icon, name}) => (
               <li key={name} className="px-2 py-2 rounded-xl hover:bg-gray-800">
                  <a href={`/${name}`} className="flex items-center gap-4">
                     {icon}
                     {name}
                  </a>
               </li>
            ))
         }
      </ul>

      <div className="mt-3 px-2 py-2 flex items-center justify-between text-lg cursor-pointer rounded-xl hover:bg-gray-800">
         Subscriptions <RiArrowRightSLine />
      </div>
      <ul className="flex flex-col py-2 border-b-[1px] border-gray-100 border-opacity-20">
         {
            Subscriptions.map(({logo, name}) => (
               <li key={name} className="px-2 py-2 rounded-xl hover:bg-gray-800">
                  <a href={`/${name}`} className="flex items-center gap-4">
                     {logo}
                     {name}
                  </a>
               </li>
            ))
         }
      </ul>

      <ul className="flex flex-col py-2 border-b-[1px] border-gray-100 border-opacity-20">
         {
            exploreLinks.map(({icon, name}) => (

               <li key={name} className="px-2 py-2 rounded-xl hover:bg-gray-800">
                  <a href={`/{${name}}`} className="flex items-center gap-4">
                     {icon}
                     {name}
                  </a>
               </li>
            ))
         }
      </ul>
      
      <div className="text-sm mt-3 flex flex-col gap-2 text-left">
         <p className="flex gap-4">
            <a href="/about">
               About
            </a>
            <a href="/press">
               Press
            </a>
            <a href="/copyright">
               Copyright
            </a>
         </p> 

         <p className="flex gap-4">

            <a href="/contact-us">
               Contact us
            </a>
            <a href="/creators">
               Creators 
            </a>
         </p>
         <p className="flex gap-4">
            <a href="/advertise">
               Advertise
            </a>
         <a href="/developers">
            Developers
         </a>
         </p>

      </div>

      <div className="text-sm">
         Terms Privacy Policy & Safety
         How YouTube works 
         Test new features 
         <p className="my-3 text-xs text-zinc-500">
            © 2024 Google LLC
         </p>
      </div>

      </div>
   );
}

export default Sidebar;
