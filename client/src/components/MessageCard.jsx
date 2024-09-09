import { Box, Typography } from "@mui/material";

function MessageCard({text,date,direction}) {
  function formateDate(date) {
    // Create a new Date object
    const newDate = new Date(date);
  
    // Set the timezone to Indian Standard Time (IST) which is UTC+5:30
    const ISTOffset = 330; // in minutes
    const ISTTime = new Date(newDate.getTime() + ISTOffset * 60 * 1000);
  
    // Format the date and time
    const options = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true, // Use 24-hour format
    };
  
    // Return the formatted date and time
    return ISTTime.toLocaleString('en-IN', options);
  }
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
        backgroundColor={`${direction === "start" ? "#b2f960":"#f3ce8c"}`}
        padding="10px"
         borderRadius="5px"
         className="message-box"
       
      >{text}</Typography>
      <Typography
        variant="caption"
        color="gray"
      >{formateDate(date)}</Typography>
    </Box>
    </Box>
  );
}

export default MessageCard;
