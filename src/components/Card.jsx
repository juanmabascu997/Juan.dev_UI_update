import * as React from 'react';
import { createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { ThemeProvider } from '@emotion/react';
import './Card.scss'
import { AiOutlineGithub } from 'react-icons/ai'
import { FiInfo } from 'react-icons/fi'

export default function CardProject({data}) {
  const theme = createTheme({
    status: {
      danger: '#e53e3e',
    },
    palette: {
      primary: {
        main: '#ff69b4',
        darker: '#053e85',
      },
      neutral: {
        main: '#69a5ff',
        contrastText: '#fff',
      },
    }
  });

  return (
    <ThemeProvider theme={theme}>
        <Card sx={{ display: 'flex' }} className='card__projects'>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5" color="neutral.main" className='subtitles'>
                        {data.title}
                    </Typography>
                </CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                    <IconButton aria-label="play/pause">
                        <FiInfo sx={{ height: 20, width: 20 }} />
                    </IconButton>
                    <IconButton aria-label="play/pause">
                        <PlayArrowIcon sx={{ height: 25, width: 25 }} />
                    </IconButton>
                    <IconButton aria-label="play/pause">
                        <AiOutlineGithub  sx={{ height: 25, width: 25 }}/>
                    </IconButton>
                </Box>
            </Box>
            <CardMedia
                component="img"
                sx={{ width: 151 }}
                image={require(`${data.largeImage}?w=50&h=50&fit=crop&auto=format`)}
                alt="alt"
            />
            </Card>
    </ThemeProvider>
  );
}
