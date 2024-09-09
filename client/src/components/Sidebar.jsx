import { Box, Divider, Stack, Typography } from "@mui/material"
import UserCard from "./UserCard"
import LogoutIcon from '@mui/icons-material/Logout';
import { useQuery } from "@apollo/client";
import { GET_ALL_USERS } from "../graphql/queries";


function Sidebar({setLoggedIn}) {
    const {loading,error,data} = useQuery(GET_ALL_USERS)
    if(loading){
        return <Typography>Loading chats...</Typography>
    }
    
    if(error){
        console.log(error.message);
    }
 
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
            data?.users?.map((item)=>(
                <UserCard key={item.id} item={item}/>
            ))
        }

    </Box>
  )
}

export default Sidebar