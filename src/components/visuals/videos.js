import React, { useEffect } from 'react';
import axios from 'axios';
import { useAppDispatch } from '../contexts/app/useAppDispatch';
import { useAppState } from '../contexts/app/useAppState';
import ReactPlayer from 'react-player';

const channelId = 'UC2PFd2XkmQQvDdCIWXMV4MQ';

export const VideoGallery = () => {
  const { addVideos } = useAppDispatch();
  const {
    data: { videos }
  } = useAppState();

  useEffect(() => {
    const setup = async () => {
      if (videos.length > 0) {
        return;
      }

      //get channel
      const response = await axios.get(
        'https://www.googleapis.com/youtube/v3/channels',
        {
          params: {
            part: 'contentDetails',
            id: channelId,
            key: process.env.YOUTUBE
          }
        }
      );

      //get playlist "uploads"
      const result = await Promise.all(
        response.data.items.map(async item => {
          const playlistId = item.contentDetails.relatedPlaylists.uploads;
          return await axios.get(
            'https://www.googleapis.com/youtube/v3/playlistItems',
            {
              params: {
                part: 'snippet',
                maxResults: 20,
                playlistId: playlistId,
                key: process.env.YOUTUBE
              }
            }
          );
        })
      );

      const videoIds = result[0].data.items.map(
        item => item.snippet.resourceId.videoId
      );

      addVideos(videoIds);
    };

    setup();
  }, [addVideos, videos.length]);

  return (
    <div className="p-5">
      <h1 className="text-center font-display">Videos</h1>
      <div className="flex flex-col flex-wrap items-center justify-center md:flex-row">
        {videos &&
          videos.map(video => (
            <ReactPlayer
              className="border hover:border-legbah-gold m-2 rounded"
              key={video}
              url={`https://www.youtube.com/watch?v=${video}`}
              width="300px"
            />
          ))}
      </div>
    </div>
  );
};
