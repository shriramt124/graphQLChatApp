import {Box} from "@mui/material"
import Sidebar from "../components/Sidebar"
import { Route, Routes } from "react-router"
import AuthScreen from "./AuthScreen"
import Welcome from "../components/Welcome"
import ChatScreen from "../components/ChatScreen"

 
function HomeScreen({setLoggedIn}) {
  return (
    <Box 
    display="flex"
    >
        <Sidebar setLoggedIn={setLoggedIn}/>
        <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/:id/:name" element={<ChatScreen />} />
        </Routes>
    </Box>
  )
}

export default HomeScreen