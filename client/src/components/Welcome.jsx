import { Stack, Typography } from "@mui/material"

 

function Welcome() {
  return (
    <Stack 
    justifyContent="center"
    alignItems="center"
    flexGrow="1"

    >
        <Typography variant="h2" >Welcome to my chat app</Typography>
    </Stack>
  )
}

export default Welcome