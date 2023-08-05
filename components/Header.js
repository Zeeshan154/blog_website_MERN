import React,{useState} from 'react';

import {Box,AppBar,Toolbar,Button,Typography,Tabs,Tab} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { authActions } from '../redux/store';
import { Navigate } from 'react-router-dom';

const Header = () => {
    //global state
    const isLogin = useSelector(state => state.isLogin);
    const dispatch = useDispatch;
    const navigate = useNavigate();
    



    //state
    const [value,setValue]=useState();
    //logout
    const handleLogout = () => {
        try {
           dispatch(authActions.logout()) 
           alert("logout Successfully")
           navigator("/login")
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <>
<AppBar position='sticky'>
    <toolbar>
        <Typography variant='h4'>Blog App</Typography>
        {isLogin && (
            <Box display={"flex"} marginLeft="auto" marginRight={'auto'}>
            <Tabs textColor="inherit" value={value} onChange={(e,val) => setValue(val) }>
                <Tab lable="Blogs" LinkComponent={Link} to="/Blogs" />
                <Tab label="My Blogs" LinkComponent={Link} to="/my-blogs"/>

            </Tabs>

        </Box>
        )}
        <Box display={'flex'} marginLeft='auto'>
            {! isLogin && (<>
                <Button sx={{margin:1,color:'white'}} LinkComponent={Link} to="/login">Login</Button>
                <Button sx={{margin:1,color:'white'}} LinkComponent={Link} to="/register">Register</Button>
           </> )}
            {isLogin && (
                <Button onClick={handleLogout} sx={{margin:1,color:'white'}}>Logout</Button>
            )}
            </Box>
    </toolbar>
</AppBar>
    </>
  );
};

export default Header