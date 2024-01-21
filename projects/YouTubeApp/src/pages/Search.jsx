import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { getHomePageVideo } from '../store/reducers/getHomePageVideo';
import Spinner from '../components/Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
import Card from '../components/Card';
import { useNavigate } from 'react-router-dom';
import { clearVideos } from '../youTubeSlicer/youTubeSlicer';
import { getSearchPageVideos } from '../store/reducers/getSearchVideos';
import SearchCard from '../components/SearchCard';
import { useDispatch, useSelector } from 'react-redux';

export default function Search() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const videos = useSelector((state)=> state.youTubeApp.videos);
  const searchTerm = useSelector((state)=> state.youTubeApp.searchTerm);

  useEffect(()=>{
    dispatch(clearVideos());
    if(searchTerm==="")navigate("/");
    else(
        dispatch(getSearchPageVideos(false))
    )
  },[dispatch,navigate,searchTerm])


  return (
    <div className='max-h-screen overflow-hidden'>
      <div style={{height:"7.5vh"}}>
      <Navbar/>
      </div>
      <div className='flex' style={{height:"92.5vh"}}>
      <Sidebar/>
      {
        videos.length ? (
            <div className='py-8 pl-8 flex flex-col gap-5 w-full'>
          <InfiniteScroll 
          dataLength={videos.length} 
          next={()=> dispatch(getSearchPageVideos(true))}
          hasMore={videos.length < 500}
          // loader={<Spinner/>}
          height={600}
          >
              
                {videos.map((item) => {
                  return (
                    <div className='my-5'>
                  <SearchCard data={item} key={item.videoId}/>
                  </div>
                  )
                })}
              
          </InfiniteScroll>
          </div>
        ):("")
        }
        {/* <Spinner/> */}
      </div>
    </div>
  )
}