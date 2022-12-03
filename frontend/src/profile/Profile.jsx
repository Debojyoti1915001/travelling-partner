import React, { useState,useEffect } from 'react'
import Cookies from 'universal-cookie';
import { Stack } from "@mui/material";
import Navbar from '../components/Home/HomeNavbar/Navbar'
import SideProfile from '../components/profilepage/SideProfile'
import MainProfile from '../components/profilepage/MainProfile';
import axios from 'axios';

const Profile =  () => {
  const [user, setUser] = useState(null);
  const cookies = new Cookies();
  console.log(cookies.get('xauthtoken'));
  const token = cookies.get('xauthtoken')
  // useEffect(()=>{
  axios.get('http://localhost:8080/profile', {
    headers: {
      'xauthtoken': `${token}`
    }
  })
    .then((res) => {
      setUser(res.data)
    })
    .catch((error) => {
      console.error(error)
    })
  // },[])
  console.log("check", user)
  return (
    <>
      <Navbar />
      <Stack direction="row">
        <div>
          <SideProfile />
        </div>
        <MainProfile user={user} />
      </Stack>
    </>
  )
}

export default Profile