import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import React from 'react'
import { BsArrowDownCircle, BsArrowUpCircle } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { setScrollDown } from '../redux/actions';
import './RowDown.scss'
import { createTheme } from "@mui/material";

const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });
const theme = createTheme({
  palette: {
    hotpink: createColor('#ff69b4'),
    grey: createColor('#22222')
  },
});
export default function RowDownComponent() {
    const scroll = useSelector( state => state.scroll)
    const dispatch = useDispatch();
  return (
    <div className='rowdown_home'>
        <BottomNavigation
            showLabels
            sx={{ flexDirection: 'column' }}
            onChange={async (event, newValue) => {
                if(scroll === false){
                    window.scrollTo({ top: 0, behavior: 'smooth'})
                    setTimeout(() => dispatch(setScrollDown(!scroll)), 200);
                } else {
                    dispatch(setScrollDown(!scroll)).then(()=>
                    {
                        window.scrollTo({ top: 100, behavior: 'smooth'})
                    })
                }
            }} 
        >
            <BottomNavigationAction sx={{ color: "grey" }} icon={scroll? <BsArrowDownCircle/> : <BsArrowUpCircle/>} />
        </BottomNavigation>
        
    </div>
  ) 
}
