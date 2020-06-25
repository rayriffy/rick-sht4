import { videos } from '../constants/videos'

export const getVideo = (): string => {
  // TODO: Return sampled video id
  const videoIndex = Math.floor(Math.random() * videos.length);
  return videos[videoIndex];
}