import React from 'react'
import { Stack } from "@mui/material";
import Navbar from '../components/Home/HomeNavbar/Navbar'
import SideProfile from '../components/profilepage/SideProfile'
import MainProfile from '../components/profilepage/MainProfile';

const Profile = () => {
  return (
    <>
       <Navbar/>
       <Stack direction="row">
        <div>
          <SideProfile />
        </div>
        <MainProfile/>
      </Stack>
    </>
  )
}

export default Profile