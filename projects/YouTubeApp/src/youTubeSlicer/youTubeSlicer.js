import { createSlice } from "@reduxjs/toolkit";
import { getHomePageVideo } from "../store/reducers/getHomePageVideo";
import { getSearchPageVideos } from "../store/reducers/getSearchVideos";
import { getRecommendedVideos } from "../store/reducers/getRecommendedVideos";
import { getVideoDetails } from "../store/reducers/getVideoDetails";


const initialState = {
    videos: [],
    currentPlay: null,
    searchTerm: "",
    searchResult: [],
    nextPageToken: null,
    recommendedVideo: []
}

export const youTubeSlice = createSlice({

    name: "youTubeApp",
    initialState,
    reducers: {
        clearVideos: (state, action) => {

            state.videos = [],
            state.nextPageToken = null
        },
        changeSearchTerm: (state, action) => {
            
            state.searchTerm = action.payload;
        },
        clearSearch: (state, action) => {
            state.searchTerm = "";
        }

    },
    extraReducers: (builder) => {
        builder.addCase(getHomePageVideo.fulfilled, (state, action) => {

            if(action.payload && action.payload.parsedData) {
                
                state.videos = action.payload.parsedData;
                state.nextPageToken = action.payload.nextPageToken;
            }
        })
        builder.addCase(getSearchPageVideos.fulfilled,(state,action)=> {
            if(action.payload && action.payload.parsedData){
                state.videos = action.payload.parsedData;
                state.nextPageToken = action.payload.nextPageToken;
            }
        })
        builder.addCase(getRecommendedVideos.fulfilled,(state,action)=> {
            if(action.payload && action.payload.parsedData){
                state.recommendedVideo = action.payload.parsedData;
            }
        })
        builder.addCase(getVideoDetails.fulfilled,(state,action)=> {
                state.currentPlay = action.payload;
        })
    }
});

export const { clearVideos, changeSearchTerm, clearSearch } = youTubeSlice.actions;
export default youTubeSlice.reducer;
