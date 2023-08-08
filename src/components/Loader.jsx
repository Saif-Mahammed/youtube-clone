import React from 'react';
import { Box, CircularProgress, Stack } from '@mui/material';

const Loader = () =>  (
  <Box
    minHeight="95vh"
    display="flex"
    justifyContent="center"
    alignItems="center"
    background="#f0f0f0" // Light gray background
  >
    <Stack direction='row' justifyContent='center' alignItems='center' height='80vh' >
      <CircularProgress color="secondary" /> {/* Using secondary color */}
    </Stack>
  </Box>
);

export default Loader;
