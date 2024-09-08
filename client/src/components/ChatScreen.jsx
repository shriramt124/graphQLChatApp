import {
  AppBar,
  Avatar,
  Box,
  Button,
  IconButton,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";
import MessageCard from "./MessageCard";

function ChatScreen() {
  const { id, name } = useParams();
  console.log(id, name);
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
      <Box backgroundColor="#f6f0f0" height="83vh" padding="20px" sx={{overflowY:"scroll"}} >
        <MessageCard text="hello how are you" date="1234" direction="start"/>
        <MessageCard text="hello how are you" date="1234" direction="end"/>
        <MessageCard text="hello how are you" date="1234" direction="start"/>
        <MessageCard text="hello how are you" date="1234" direction="end"/>
        <MessageCard text="hello how are you" date="1234" direction="start"/>
        <MessageCard text="hello how are you" date="1234" direction="end"/>
        <MessageCard text="hello how are you" date="1234" direction="start"/>
        <MessageCard text="hello how are you" date="1234" direction="end"/>
        <MessageCard text="hello how are you" date="1234" direction="start"/>
        <MessageCard text="hello how are you" date="1234" direction="end"/>
        <MessageCard text="hello how are you" date="1234" direction="start"/>
        <MessageCard text="hello how are you" date="1234" direction="end"/>
        <MessageCard text="hello how are you" date="1234" direction="start"/>
        <MessageCard text="hello how are you" date="1234" direction="end"/>
        <MessageCard text="hello how are you" date="1234" direction="start"/>
        <MessageCard text="hello how are you" date="1234" direction="end"/>
        <MessageCard text="hello how are you" date="1234" direction="start"/>
        <MessageCard text="hello how are you" date="1234" direction="end"/>
        <MessageCard text="hello how are you" date="1234" direction="start"/>
        <MessageCard text="hello how are you" date="1234" direction="end"/>
        <MessageCard text="hello how are you" date="1234" direction="start"/>
        <MessageCard text="hello how are you" date="1234" direction="end"/>
        <MessageCard text="hello how are you" date="1234" direction="start"/>
        <MessageCard text="hello how are you" date="1234" direction="end"/>
        <MessageCard text="hello how are you" date="1234" direction="start"/>
        <MessageCard text="hello how are you" date="1234" direction="end"/>
        <MessageCard text="hello how are you" date="1234" direction="start"/>
        <MessageCard text="hello how are you" date="1234" direction="end"/>
        <MessageCard text="hello how are you" date="1234" direction="start"/>
        <MessageCard text="hello how are you" date="1234" direction="end"/>
        <MessageCard text="hello how are you" date="1234" direction="start"/>
        <MessageCard text="hello how are you" date="1234" direction="end"/>
        <MessageCard text="hello how are you" date="1234" direction="start"/>
        <MessageCard text="hello how are you" date="1234" direction="end"/>
        <MessageCard text="hello how are you" date="1234" direction="start"/>
        <MessageCard text="hello how are you" date="1234" direction="end"/>
        <MessageCard text="hello how are you" date="1234" direction="start"/>
        <MessageCard text="hello how are you" date="1234" direction="end"/>
        <MessageCard text="hello how are you" date="1234" direction="start"/>
        <MessageCard text="hello how are you" date="1234" direction="end"/>
        <MessageCard text="hello how are you" date="1234" direction="start"/>
        <MessageCard text="hello how are you" date="1234" direction="end"/>
        <MessageCard text="hello how are you" date="1234" direction="start"/>
        <MessageCard text="hello how are you" date="1234" direction="end"/>
        <MessageCard text="hello how are you" date="1234" direction="start"/>
        <MessageCard text="hello how are you" date="1234" direction="end"/>
        <MessageCard text="hello how are you" date="1234" direction="start"/>
        <MessageCard text="hello how are you" date="1234" direction="end"/>
        <MessageCard text="hello how are you" date="1234" direction="start"/>
        <MessageCard text="hello how are you" date="1234" direction="end"/>
        <MessageCard text="hello how are you" date="1234" direction="start"/>
        <MessageCard text="hello how are you" date="1234" direction="end"/>
        <MessageCard text="hello how are you" date="1234" direction="start"/>
        <MessageCard text="hello how are you" date="1234" direction="end"/>
        <MessageCard text="hello how are you" date="1234" direction="start"/>
        <MessageCard text="hello how are you" date="1234" direction="end"/>
        <MessageCard text="hello how are you" date="1234" direction="start"/>
        <MessageCard text="hello how are you" date="1234" direction="end"/>
        <MessageCard text="hello how are you" date="1234" direction="start"/>
        <MessageCard text="hello how are you" date="1234" direction="end"/>
        <MessageCard text="hello how are you" date="1234" direction="start"/>
        <MessageCard text="hello how are you" date="1234" direction="end"/>
        <MessageCard text="hello how are you" date="1234" direction="start"/>
        <MessageCard text="hello how are you" date="1234" direction="end"/>
        <MessageCard text="hello how are you" date="1234" direction="start"/>
        <MessageCard text="hello how are you" date="1234" direction="end"/>
        <MessageCard text="hello how are you" date="1234" direction="start"/>
        <MessageCard text="hello how are you" date="1234" direction="end"/>
        <MessageCard text="hello how are you" date="1234" direction="start"/>
        <MessageCard text="hello how are you" date="1234" direction="end"/>
        <MessageCard text="hello how are you" date="1234" direction="start"/>
        <MessageCard text="hello how are you" date="1234" direction="end"/>
        <MessageCard text="hello how are you" date="1234" direction="start"/>
        <MessageCard text="hello how are you" date="1234" direction="end"/>
        <MessageCard text="hello how are you" date="1234" direction="start"/>
        <MessageCard text="hello how are you" date="1234" direction="end"/>
        <MessageCard text="hello how are you" date="1234" direction="start"/>
        <MessageCard text="hello how are you" date="1234" direction="end"/>
        <MessageCard text="hello how are you" date="1234" direction="start"/>
        <MessageCard text="hello how are you" date="1234" direction="end"/>
        <MessageCard text="hello how are you" date="1234" direction="start"/>
        <MessageCard text="hello how are you" date="1234" direction="end"/>
        <MessageCard text="hello how are you" date="1234" direction="start"/>
        <MessageCard text="hello how are you" date="1234" direction="end"/>
        <MessageCard text="hello how are you" date="1234" direction="start"/>
        <MessageCard text="hello how are you" date="1234" direction="end"/>
        <MessageCard text="hello how are you" date="1234" direction="start"/>
        <MessageCard text="hello how are you" date="1234" direction="end"/>
        <MessageCard text="hello how are you" date="1234" direction="start"/>
        <MessageCard text="hello how are you" date="1234" direction="end"/>
        <MessageCard text="hello how are you" date="1234" direction="start"/>
        <MessageCard text="hello how are you" date="1234" direction="end"/>
        <MessageCard text="hello how are you" date="1234" direction="start"/>
        <MessageCard text="hello how are you" date="1234" direction="end"/>
        <MessageCard text="hello how are you" date="1234" direction="start"/>
        <MessageCard text="hello how are you" date="1234" direction="end"/>
        <MessageCard text="hello how are you" date="1234" direction="start"/>
        <MessageCard text="hello how are you" date="1234" direction="end"/>
        <MessageCard text="hello how are you" date="1234" direction="start"/>
        <MessageCard text="hello how are you" date="1234" direction="end"/>
        <MessageCard text="hello how are you" date="1234" direction="start"/>
        <MessageCard text="hello how are you" date="1234" direction="end"/>
        <MessageCard text="hello how are you" date="1234" direction="start"/>
        <MessageCard text="hello how are you" date="1234" direction="end"/>
        <MessageCard text="hello how are you" date="1234" direction="start"/>
          <MessageCard text="hello how are you" date="1234" direction="start"/>
        <MessageCard text="hello how are you" date="1234" direction="end"/>
      </Box>
      <TextField
        placeholder="Enter a message "
        variant="standard"
        fullWidth
        multiline
        rows={2}
        sx={{ padding: "10px" }}
      />
    </Box>
  );
}

export default ChatScreen;
