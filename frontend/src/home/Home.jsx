import React, { useEffect, useState } from "react";
import { Stack } from "@mui/material";
import HomeNavbar from "../components/Home/HomeNavbar/Navbar";
import Sidebar from "../components/Home/Sidebar/Sidebar";
import Feed from "../components/Home/Feed/Feed";
import Rightbar from "../components/Home/Rightbar/Rightbar";
import PostPopup from "../components/Home/Feed/PostPopup";

// TODO Debo - useEffect to get all posts 
// Add a loading indicator while the posts are loading (useState)
// Send the posts as props to the Feed component
const Home = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    const url = "http://localhost:8080/admin/post/";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        setData(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);
  console.log(data)
  return (data.length?
    <>
      <HomeNavbar />
      <Stack direction="row">
        <div>
          <Sidebar />
        </div>
        <Feed data={data} />
        <Rightbar />
      </Stack>
    </>
    :<>
    <HomeNavbar />
    <Stack direction="row">
      <div>
        <Sidebar />
      </div>
      <div style={{color: "red",marginLeft:"30%",marginRight:"30%",fontSize: "40px" }}>
        Empty
      </div>
      <Rightbar />
    </Stack>
  </>
  );
};

export default Home;
