import { Stack,Avatar, Typography } from "@mui/material"
import { useNavigate } from "react-router"

 
function UserCard({item:{firstName,lastName,id}}) {
    const navigate = useNavigate()
  return (
    <Stack 
    className="usercard"
    direction="row"
    spacing={2}
    sx={{py:1,px:1}}
    alignItems="center"
    onClick={() => navigate(`/${id}/${firstName} ${lastName}`)}
    >
       <Avatar src={`https://api.dicebear.com/9.x/pixel-art/svg?seed=${firstName} ${lastName}`}
       sx={{width:"32px" ,height:"32px"}}

       />
       <Typography variant="subtitle2">{firstName} {lastName}</Typography>
    </Stack>
  )
}

export default UserCard