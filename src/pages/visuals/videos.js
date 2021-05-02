import React from 'react';
import { VideoGallery } from '../../components/visuals/videos';

const Videos = ({ videos }) => <VideoGallery videos={videos} />;

// export async function getStaticProps() {
//   const channelId = 'UC2PFd2XkmQQvDdCIWXMV4MQ';

//   const videoClient = google.youtube({
//     version: 'v3',
//     auth: process.env.YOUTUBE
//   });

//   //get channel
//   const response = await videoClient.channels.list({
//     id: channelId,
//     part: 'contentDetails'
//   });

//   //get playlist "uploads"
//   const result = await Promise.all(
//     response.data.items.map(async item => {
//       const playlistId = item.contentDetails.relatedPlaylists.uploads;

//       return await videoClient.playlistItems.list({
//         part: 'snippet',
//         maxResults: 20,
//         playlistId: playlistId
//       });
//     })
//   );

//   const videoIds = result[0].data.items.map(
//     item => item.snippet.resourceId.videoId
//   );

//   return {
//     props: {
//       videos: videoIds
//     }
//   };
// }

export default Videos;
