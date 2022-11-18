import React from "react";
import Home from "./home/Home";
import Landing from "./landing/Landing";
import Courses from "./components/coursespage/Courses";
import Login from './login/login';
import SignUp from "./signup/SignUp";
import Profile from "./profile/Profile"
import { BrowserRouter, Routes, Route} from "react-router-dom"
import ProfileForm from "./profileform/ProfileForm";
import ProfileDetails from "./profiledetails/ProfileDetails";
import Message from "./message/Message";
import Videoplayer from "./videoplayer/Videoplayer";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={
            <>
              <Home/>
            </>
          }>
          </Route>
          <Route exact path='/' element={
                <>
                  <Landing/>
                </>
              }>
            </Route>
            <Route path="/login" element={
              <Login/>
            }>

            </Route>

            <Route path="/signup" element={
              <SignUp/>
            }>
            </Route>

            <Route path="/courses" element={
              <Courses/>
            }>
            </Route>

            <Route path="/profile" element={
              <Profile/>
            }>
            </Route>

            <Route path="/profileform" element={
              <ProfileForm/>
            }>
            </Route>

            <Route path="/profiledetails" element={
              <ProfileDetails/>
            }>
            </Route>

            <Route path="/messages" element={
              <Message/>
            }>
            </Route>

            <Route path="/video" element={
              <Videoplayer/>
            }>
            </Route>

        </Routes>
      </BrowserRouter>
    </>
 );
}

export default App;
