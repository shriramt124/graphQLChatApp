import {
  Box,
  Stack,
  Typography,
  Button,
  TextField,
  Card,
  CircularProgress,
  Alert,
} from "@mui/material";
import { useRef } from "react";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { SIGNUP_USER, LOGIN_USER } from "../graphql/mutations";
 

function AuthScreen({setLoggedIn}) {
  const [showLogin, setShowLogin] = useState(true);
  const authForm = useRef(null);
  const [signupUser, { data: signupData, loading: l1, error: e1 }] =
    useMutation(SIGNUP_USER);
  const [loginUser, { data: siginInData, loading: l2, error: e2 }] =
    useMutation(LOGIN_USER,{
      onCompleted: (data) => {
        console.log(data);
         localStorage.setItem("jwt",data.signInUser.token)
         setLoggedIn(true)
      },

    });

  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (l1 || l2) {
    return (
      <Box
        width="100%"
        height="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box textAlign="center">
          <CircularProgress />
          <Typography varient="h6">Authenticating</Typography>
        </Box>
      </Box>
    );
  }
  const handleSubmit = (e) => {
    
    e.preventDefault();
    console.log(formData);
    if (showLogin) {
      //signin
      loginUser({
        variables: {
          userSignIn: formData,
        },
      });
    } else {
      //signup user
      signupUser({
        variables: {
          userNew: formData,
        },
      });
      setFormData({});
    }
  };

  return (
    <Box
      onSubmit={handleSubmit}
      ref={authForm}
      height="80vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      component="form"
    >
      <Card sx={{ padding: "10px" }} variant="outlined">
        <Stack direction="column" spacing={2} sx={{ width: "400px" }}>
          <Typography variant="h5">{showLogin ? "Login" : "Signup"}</Typography>
          {signupData && (
            <Alert severity="success">
              {signupData.signupUser.firstName} signed up
            </Alert>
          )}
          {e1 && <Alert severity="error">{e1.message}</Alert>}
          {e2 && <Alert severity="error">{e2.message}</Alert>}
          {!showLogin && (
            <TextField
              label="First Name.."
              name="firstName"
              variant="standard"
              onChange={handleChange}
              required
            ></TextField>
          )}
          {!showLogin && (
            <TextField
              label="Last Name.."
              name="lastName"
              variant="standard"
              onChange={handleChange}
              required
            ></TextField>
          )}
          <TextField
            label="Email.."
            name="email"
            variant="standard"
            onChange={handleChange}
            required
          ></TextField>
          <TextField
            label="Password.."
            name="password"
            variant="standard"
            onChange={handleChange}
            required
          ></TextField>

          <Button
            variant="outlined"
            sx={{ backgroundColor: "orangered", color: "white" }}
            type="submit"
          >
            {showLogin ? "Login" : "Signup"}
          </Button>
          <Typography
            variant="subtitle1"
            onClick={() => {
              setShowLogin((prev) => !prev);
              authForm.current.reset();
            }}
            sx={{ color: "blue", cursor: "pointer" }}
          >
            {showLogin ? "Signup" : "Login"}
          </Typography>
        </Stack>
      </Card>
    </Box>
  );
}

export default AuthScreen;
