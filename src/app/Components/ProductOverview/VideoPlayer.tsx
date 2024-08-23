import React from 'react';

interface VideoPlayerProps {
  src: string;
  poster?: string;
  width?: string;
  height?: string;
  controls?: boolean;
  autoPlay?: boolean;
  loop?: boolean;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src,
  poster,
  width = "400px",
  height = "120px",
  controls = true,
  autoPlay = false,
  loop = false,
}) => {
  return (
    <div style={{ width, height }}>
      <video
        width="100%"
        height="100%"
        controls={controls}
        autoPlay={autoPlay}
        loop={loop}
        poster={poster}
        style={{ borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
