import React, { useEffect } from "react";
import Navbar from "../components/Navbar.jsx";
import Sidebar from "../components/Sidebar.jsx";
import { getHomePageVideo } from "../store/reducers/getHomePageVideo.js";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../components/Spinner.jsx";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "../components/Card.jsx";

function Home() {
   
   const dispatch = useDispatch();

   const videos = useSelector( (state) => state.youTubeApp.videos );

   useEffect( () => {

      dispatch(getHomePageVideo(false));

   }, [dispatch]);

   return (
      <>
         <Navbar/>

         <div className='flex' style={{height:"92.5vh"}}>
         <Sidebar/>

         {
            videos.length ? (
               <InfiniteScroll 
                  dataLength={videos.length}
                  next={() => dispatch(getHomePageVideo(true))}
                  hasMore={videos.length < 500}
                  // loader={<Spinner />}
                  height={650}
               >
               <div className='grid gap-y-14 gap-x-8 grid-cols-4 p-8'>
                  {videos.map((item) => {
                     return <Card data={item} key={item.videoId}/>
                  })}
              </div>

               </InfiniteScroll>
            ) : ""
         }
         </div>
         {/* (<Spinner />) */}

         {/* <Spinner /> */}
      </>
   );
}

export default Home;
