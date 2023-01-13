import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import BoltIcon from "@mui/icons-material/Bolt";
import "./Navbar.scss";
import { setNewMenu } from "../redux/actions";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

export default function NavBar() {
  const [value, setValue] = React.useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Box sx={{ flexDirection: 'column' }} className="Nabvar">
      <BottomNavigation
        showLabels
        value={value}
        sx={{ flexDirection: 'column' }}
        onChange={(event, newValue) => {
          setValue(newValue);
          newValue === 0 ? navigate('/') :
          newValue === 1 ? navigate('/projects') :
          newValue === 2 ? navigate('/skills') :
          console.log()

          dispatch(setNewMenu(newValue))
        }} 
      >
        <BottomNavigationAction sx={{ color: "black" }} label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction sx={{ color: "black" }} label="Projects" icon={<RocketLaunchIcon />} />
        <BottomNavigationAction sx={{ color: "black" }} label="Skills" icon={<BoltIcon />} />
      </BottomNavigation>
    </Box>
  );
}
