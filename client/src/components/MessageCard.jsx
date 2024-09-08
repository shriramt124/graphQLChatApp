import { Box, Typography } from "@mui/material";

function MessageCard({text,date,direction}) {
  return (
    <Box
    display="flex"
    py="10px"
    justifyContent={direction}
    
    
    > 
    <Box 
    >
      <Typography
        variant="subtitle2"
        backgroundColor="#f0dcb6"
        padding="10px"
         borderRadius="5px"
         className="message-box"
       
      >{text}</Typography>
      <Typography
        variant="caption"
        color="gray"
      >{date}</Typography>
    </Box>
    </Box>
  );
}

export default MessageCard;
