import React from 'react'
import "./Videoplayer.css"
import { Stack } from "@mui/material"
import VideoNav from '../components/Videopage/VideoNav'
import Embedvideo from '../components/Videopage/Embedvideo'
import Coursecontent from '../components/Videopage/Coursecontent'

const Videoplayer = () => {
  return (
    <>
        <VideoNav/>
        <Stack direction='row'>
            <Embedvideo embedId="VhJaCBfZ1pk"/>
            <Coursecontent/>
        </Stack>
    </>
  )
}

export default Videoplayer