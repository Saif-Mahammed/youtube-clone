import React from 'react';
import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../utils/constants';

const ChannelCard = ({ channelDetail, marginTop }) => (
  <Box
    sx={{
      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
      borderRadius: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: { xs: '356px', md: '320px' },
      height: '326px',
      margin: 'auto',
      marginTop,
      background: '#fff', // Light background color
      transition: 'transform 0.2s',
      '&:hover': {
        transform: 'scale(1.02)', // Slight zoom effect on hover
      },
    }}
  >
    <Link to={`/channel/${channelDetail?.id?.channelId}`} style={{ textDecoration: 'none' }}>
      <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#333' }}>
        <CardMedia
          image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
          alt={channelDetail?.snippet?.title}
          sx={{
            borderRadius: '50%',
            height: '180px',
            width: '180px',
            mb: 2,
            border: '1px solid #e3e3e3',
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
          }}
        />
        <Typography variant="h6" sx={{ fontSize: '18px', fontWeight: 'bold', mb: 1 }}>
          {channelDetail?.snippet?.title}{' '}
          <CheckCircleIcon sx={{ fontSize: '18px', color: '#55C9A6', ml: '5px' }} />
        </Typography>
        {channelDetail?.statistics?.subscriberCount && (
          <Typography sx={{ fontSize: '15px', fontWeight: 500, color: '#666' }}>
            {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
          </Typography>
        )}
      </CardContent>
    </Link>
  </Box>
);

export default ChannelCard;
