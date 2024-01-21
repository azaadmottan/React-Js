import axios from 'axios';
import { parseVideoDuration } from './parseVideoDuration';
import { convertRawtoString } from './convertRawtoString';
import { timeSince } from './timeSince';

export const parseData = async(items) => {

   const API_KEY = import.meta.env.VITE_YOUTUBE_DATA_API;

   try {
      const videoIds = [];
      const channelIds = [];
      
      items.forEach((item) => {
         
         videoIds.push(item.id.videoId);
         channelIds.push(item.snippet.channelId);
      });

      const {
         data: { items: channelsData },
      } = await axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet,contentDetails&id=${channelIds.join(",")}&key=${API_KEY}`);

      const parsedChannelData = [];

      channelsData.forEach((channel) => parsedChannelData.push({
         id: channel.id,
         image: channel.snippet.thumbnails.default.url,
      }));

      const {
         data: {items: videosData},
      } = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=contentDetails,statistics&id=${videoIds.join(",")}&key=${API_KEY}`);

      const parseData = [];

      items.forEach((item, index) => {

         const {image: channelImage} = parsedChannelData.find((data) => data.id === item.snippet.channelId)

         if(channelImage) {
            parseData.push({
               videoId: item.id.videoId,
               videoTitle: item.snippet.title,
               videoDescription: item.snippet.description,
               videoThumbnail: item.snippet.thumbnails.medium.url,
               videoLink: `https://www.youtube.com/watch?v=${item.id.videoId}`,
               videoDuration: parseVideoDuration(
                  videosData[index].contentDetails.duration
               ),
               videoViews: convertRawtoString(
                  videosData[index].statistics.viewCount
               ),
               videoAge: timeSince(new Date(item.snippet.publishedAt)),
               channelInfo: {
                  id: item.snippet.channelIds,
                  image: channelImage,
                  name: item.snippet.channelTitle
               }
            })
         }
      });

      return parseData;

   } catch (error) {
      
      console.log(error);
   }
}