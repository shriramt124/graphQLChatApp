import { Box, Stack, Typography, Button, TextField,Card } from "@mui/material";
import { useRef } from "react";
import { useState } from "react";
const initialFormData = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
}

function AuthScreen() {
    const [showLogin,setShowLogin] = useState(true);
   const authForm = useRef(null);

  const [formData, setFormData ] = useState(initialFormData);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Box ref={authForm} height="80vh" display="flex" justifyContent="center" alignItems="center" component="form" onSubmit={handleSubmit}>
        <Card sx={{padding:"10px"}} variant="outlined"> 
      <Stack direction="column" spacing={2} sx={{width:"400px"}}>
        <Typography variant="h5">{showLogin ? "Login":"Signup"}</Typography>
       {!showLogin && <TextField
          label="First Name.."
          name="firstName"
          variant="standard"
          onChange={handleChange}
          
        ></TextField>}
        {!showLogin && <TextField
          label="Last Name.."
          name="lastName"
          variant="standard"
          onChange={handleChange}
          
        ></TextField>}
        <TextField
          label="Email.."
          name="email"
          variant="standard"
          onChange={handleChange}
          
        ></TextField>
        <TextField
          label="Password.."
          name="password"
          variant="standard"
          onChange={handleChange}
         
        ></TextField>
        
        <Button variant="outlined" sx={{backgroundColor:"orangered",color:"white"}} type="submit">
          {showLogin ? "Login":"Signup"}
        </Button>
        <Typography variant="subtitle1" onClick={()=>{
            setShowLogin(prev => !prev)
            authForm.current.reset();
        }} sx={{color:"blue" ,cursor:"pointer"}}>{showLogin ? "Signup":"Login"}</Typography>
      </Stack>
      </Card>
    </Box>
  );
}

export default AuthScreen;
