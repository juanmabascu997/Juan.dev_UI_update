import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import React from 'react'
import { BsArrowDownCircle, BsArrowUpCircle } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { setScrollDown } from '../redux/actions';
import './RowDown.scss'

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
            <BottomNavigationAction sx={{ color: "black" }} icon={scroll? <BsArrowDownCircle/> : <BsArrowUpCircle/>} />
        </BottomNavigation>
        
    </div>
  ) 
}
