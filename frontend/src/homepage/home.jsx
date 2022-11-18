import { Stack } from "@mui/material";
import HomeNavbar from "../components/Home/HomeNavbar/Navbar"
import Sidebar from "../components/Home/Sidebar/Sidebar";
import Feed from "../components/Home/Feed/Feed";
import Rightbar from "../components/Home/Rightbar/Rightbar";

let Home = () => {
    // TODO Debo - useEffect to get all posts 
    // Add a loading indicator while the posts are loading (useState)
    // Send the posts as props to the Feed component

    return (<>
            <HomeNavbar/>
            <Stack direction="row" >
            <div>
            <Sidebar/>
            </div>
            <Feed /> 
            <Rightbar/>
            </Stack>
            </>);
}

export default Home;