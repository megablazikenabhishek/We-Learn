import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import NavBar from "./NavBar";
import axios from "axios";
import URI from "../URI";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://github.com/Nerd2004">
        Nerd
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();
export default function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [teacher, setteacher] = useState(false);
  const [res, setres] = useState(null);
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    console.log(email, password, teacher, res);
    event.preventDefault();
    // const data = new FormData(event.currentTarget);
    const postData = async () => {
      try {
        if (teacher) {
          const resp = await axios.post(`${URI}/api/auth/teacher/login`, {
            email,
            password,
          });
          if (resp && resp.status === 200) {
            console.log(resp);
            localStorage.setItem("auth", JSON.stringify(resp.data));
            localStorage.setItem("role", "teacher");
            navigate("/home");
          }
        } else {
          const resp = await axios.post(`${URI}/api/auth/student/login`, {
            email,
            password,
          });
          if (resp && resp.status === 200) {
            console.log(resp);
            localStorage.setItem("auth", JSON.stringify(resp.data));
            localStorage.setItem("role", "student");
            navigate("/home");
          }
        }
      } catch (error) {
        console.log(error);
      }
    };
    postData();
  };
  const handleTeacherChange = (event) => {
    setteacher(event.target.checked);
  };
  return (
    <ThemeProvider theme={defaultTheme}>
      <NavBar />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Paper elevation={3}>
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              "& > :not(style)": {
                // m: 1,
                // width: 250,
                // height: 2,
                padding: 3,
              },
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              // component="form"
              // onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <form onSubmit={handleSubmit}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  onChange={(e) => {
                    setemail(e.target.value);
                  }}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={(e) => {
                    setpassword(e.target.value);
                  }}
                />
                {/* <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Teacher"
                  onChange={setteacher((prev) => {
                    return !prev;
                  })}
                /> */}
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Teacher"
                  checked={teacher}
                  onChange={handleTeacherChange}
                />
                <Grid container>
                  <Grid item>
                    <Link href="/register" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
              </form>
            </Box>
          </Box>
        </Paper>

        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
