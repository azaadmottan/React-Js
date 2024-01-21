import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { parseData } from "../../utils/parseData";

const API_KEY = import.meta.env.VITE_YOUTUBE_DATA_API;

export const getHomePageVideo = createAsyncThunk(
    "youtube/App/searchPageVideos",
    async (isNext, { getState }) => {

        const { youTubeApp: { nextPageToken: nextPageTokenFromState, videos } } = getState();
        
        const response = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?maxResults=10&q="chai aur code"&key=${API_KEY}&part=snippet&type=video&${isNext ? `pageToken=${nextPageToken}` : ""}`);
        
        const items = response.data.items;

        const parsedData = await parseData(items);

        return {parsedData:[...videos,...parsedData],nextPageToken:nextPageTokenFromState};
    }
);