import {
  AppBar,
  Avatar,
  Box,
 
  Stack,
 
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";
import MessageCard from "./MessageCard";
import { useMutation, useQuery, useSubscription } from "@apollo/client";
import {  GET_MESSAGE } from "../graphql/queries";
import { useState } from "react";
import SendIcon from '@mui/icons-material/Send';
import { SEND_MESSAGE } from "../graphql/mutations";
import { MSG_SUB } from "../graphql/subscription";
 

function ChatScreen() {
  const { id, name } = useParams();
  const [text,setText] = useState("")
  const [messages,setMessages] = useState([])
  const {data,loading,error}  = useQuery(GET_MESSAGE,{
    variables:{
      receiverId:+id
    },
    onCompleted:(data)=>{
      setMessages(data?.messagesByUser);
    }
  })
 const [sendMessage]= useMutation(SEND_MESSAGE);
 const {data:subData} = useSubscription(MSG_SUB,{
onData : ({data}) => {
  console.log(data.data)
  setMessages(prev=>[...prev,data.data.messageAdded])
}
 })
       
  return (
    <Box flexGrow={1} display="flex" flexDirection="column">
      <AppBar
        position="static"
        sx={{ backgroundColor: "orange", boxShadow: 0 }}
      >
        <Toolbar>
          <Avatar
            src={`https://api.dicebear.com/9.x/pixel-art/svg?seed=${name}}`}
            sx={{ width: "32px", height: "32px", mr: 2 }}
          />
          <Typography variant="h6">{name.toLocaleUpperCase()}</Typography>
        </Toolbar>
      </AppBar>
      <Box
        backgroundColor="#f6f0f0"
        height="83vh"
        padding="20px"
        sx={{ overflowY: "scroll" }}
      >
        {
        // console.log(data.messagesByUser[0].text)
        loading ? <Typography variant="h5" >loading ...</Typography> :
        messages?.map((item)=>(
          <MessageCard key={item.id} text={item.text} date={item.createdAt} direction={item.receiverId ===+id ? "end":"start"}/>
        ))
        }
      </Box>
      <Stack direction="row"> 
      <TextField
        placeholder="Enter a message "
        variant="standard"
        fullWidth
        multiline
        rows={2}
        sx={{ padding: "10px" }}
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <SendIcon fontSize="large" onClick={()=>sendMessage({
        variables:{
          text,
          receiverId:+id
        }
      })} sx={{cursor:"pointer"}}/>
      </Stack>
    </Box>
  );
}

export default ChatScreen;
