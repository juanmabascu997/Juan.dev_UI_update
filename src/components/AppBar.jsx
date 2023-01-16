import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import HomeIcon from "@mui/icons-material/Home";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import BoltIcon from "@mui/icons-material/Bolt";
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { BottomNavigationAction } from '@mui/material';

export default function DrawerAppBar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            MUI
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Menu
      </Typography>
      <Divider />
      <List>
          <ListItem key={1} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
                <BottomNavigationAction sx={{ color: "grey" }} label="Skills" icon={<BoltIcon />} />
            </ListItemButton>
          </ListItem>

          <ListItem key={2} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
                <BottomNavigationAction sx={{ color: "grey" }} label="Home" icon={<HomeIcon />} />
            </ListItemButton>
          </ListItem>
          
          <ListItem key={3} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
                <BottomNavigationAction sx={{ color: "grey" }} label="Projects" icon={<RocketLaunchIcon />} />
            </ListItemButton>
          </ListItem>
      </List>
    </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
