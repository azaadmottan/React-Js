import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {parseData} from "../../utils/parseData";


const API_KEY = import.meta.env.VITE_YOUTUBE_DATA_API;

export const getSearchPageVideos = createAsyncThunk(
    "youtube/App/homePageVideos",
    async(isNext,{getState}) => {
        const {
            youTubeApp : {nextPageToken : nextPageToken,videos,searchTerm},
        } = getState();
        const response = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?q=${searchTerm}&key=${API_KEY}&part=snippet&type=video&${
            isNext ? `pageToken=${nextPageToken}` : ""
          }`);
        const items = response.data.items;
        const parsedData = await parseData(items);

        return {parsedData:[...videos,...parsedData],nextPageToken:nextPageToken}
    }
)