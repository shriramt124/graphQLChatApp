import { Box, Divider, Stack, Typography } from "@mui/material"
import UserCard from "./UserCard"
import LogoutIcon from '@mui/icons-material/Logout';


function Sidebar({setLoggedIn}) {
    const users = [
        {
            id:1,
            firstName:"ram",
            lastName:"tiwari"
        },
        {
            id:2,
            firstName:"arjun",
            lastName:"tiwari"
        },
        {
            id:3,
            firstName:"priyanka",
            lastName:"tiwari"
        }
    ]
    const handleLogout =()=>{
        localStorage.removeItem("jwt")
        setLoggedIn(false);
        
        
    }
  return (
    <Box 
    backgroundColor="#787575"
    height="100vh"
    width="250px"
    padding="10px"
    >
        <Stack direction="row" justifyContent="space-between" alignItems="center">

        <Typography variant="h6" sx={{textAlign:"center",textTransform:"capitalize",color:"orange",fontSize:"28px"}}>
            chat
        </Typography>
        <LogoutIcon onClick={handleLogout}  sx={{color:"orange",cursor:"pointer"}}/>
        </Stack>
        
        <Divider />
        {
            users.map((item)=>(
                <UserCard key={item.id} item={item}/>
            ))
        }

    </Box>
  )
}

export default Sidebar