import React from 'react'
import { Link } from "react-router-dom"; 
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constants";

const VideoCard = ({ video: { id: { videoId }, snippet } }) => (
  <Card
    sx={{
      width: { xs: '100%', sm: '358px', md: "320px" },
      boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', // Subtle shadow
      borderRadius: '10px',
      transition: 'transform 0.2s',
      '&:hover': {
        transform: 'scale(1.02)', // Slight zoom effect on hover
      },
    }}
  >
    <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY` }>
      <CardMedia
        image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
        alt={snippet?.title}
        sx={{ width: '100%', height: 180, borderRadius: '10px 10px 0 0' }}
      />
    </Link>
    <CardContent sx={{ backgroundColor: "#fff", height: '106px', padding: '12px' }}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl } style={{ textDecoration: 'none' }}>
        <Typography variant="subtitle1" fontWeight="bold" color="#333">
          {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
        </Typography>
      </Link>
      <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} style={{ textDecoration: 'none' }}>
        <Typography variant="subtitle2" color="#666">
          {snippet?.channelTitle || demoChannelTitle}
          <CheckCircleIcon sx={{ fontSize: "12px", color: "#888", ml: "5px" }} />
        </Typography>
      </Link>
    </CardContent>
  </Card>
);

export default VideoCard;
