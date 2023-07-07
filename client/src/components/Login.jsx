// import * as React from "react";
// import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
// import CssBaseline from "@mui/material/CssBaseline";
// import TextField from "@mui/material/TextField";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
// import Link from "@mui/material/Link";
// import Grid from "@mui/material/Grid";
// import Box from "@mui/material/Box";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
// import Typography from "@mui/material/Typography";
// import Container from "@mui/material/Container";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import Paper from "@mui/material/Paper";
// function Copyright(props) {
//   return (
//     <Typography
//       variant="body2"
//       color="text.secondary"
//       align="center"
//       {...props}
//     >
//       {"Copyright © "}
//       <Link color="inherit" href="https://github.com/Nerd2004">
//         Nerd
//       </Link>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

// // TODO remove, this demo shouldn't need to reset the theme.

// const defaultTheme = createTheme();

// export default function SignIn() {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     console.log({
//       email: data.get("email"),
//       password: data.get("password"),
//     });
//   };

//   return (
//     <ThemeProvider theme={defaultTheme}>
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <Paper elevation={3} px={15}>
//           <Box
//             sx={{
//               marginTop: 8,
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//             }}
//           >
//             <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
//               <LockOutlinedIcon />
//             </Avatar>
//             <Typography component="h1" variant="h5">
//               Sign in
//             </Typography>
//             <Box
//               component="form"
//               onSubmit={handleSubmit}
//               noValidate
//               sx={{ mt: 1 }}
//             >
//               <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 id="email"
//                 label="Email Address"
//                 name="email"
//                 autoComplete="email"
//                 autoFocus
//               />
//               <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 name="password"
//                 label="Password"
//                 type="password"
//                 id="password"
//                 autoComplete="current-password"
//               />
//               {/* <FormControlLabel
//               control={<Checkbox value="remember" color="primary" />}
//               label="Remember me"
//             /> */}
//               <Button
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 sx={{ mt: 3, mb: 2 }}
//               >
//                 Sign In
//               </Button>
//               <Grid container>
//                 {/* <Grid item xs>
//                 <Link href="#" variant="body2">
//                   Forgot password?
//                 </Link>
//               </Grid> */}
//                 <Grid item>
//                   <Link href="/register" variant="body2">
//                     {"Don't have an account? Sign Up"}
//                   </Link>
//                 </Grid>
//               </Grid>
//             </Box>
//           </Box>
//         </Paper>

//         <Copyright sx={{ mt: 8, mb: 4 }} />
//       </Container>
//     </ThemeProvider>
//   );
// }

// // import * as React from 'react';
// // import Box from '@mui/material/Box';
// // import Paper from '@mui/material/Paper';

// // export default function SimplePaper() {
// //   return (
// //     <Box
// //       sx={{
// //         display: 'flex',
// //         flexWrap: 'wrap',
// //         '& > :not(style)': {
// //           m: 1,
// //           width: 128,
// //           height: 128,
// //         },
// //       }}
// //     >
// //       <Paper elevation={0} />
// //       <Paper />
// //       <Paper elevation={3} />
// //     </Box>
// //   );
// // }

import React from "react";
import "./AddCourse/AddCourse.css";
import NavBar from "./NavBar";
import Button from "@mui/material/Button";
const AddCourse = () => {
  return (
    <>
      <NavBar />
      <div className="signup_container">
        <div className="signup_form_container">
          <div className="right">
            <p>Login</p>
            <form className="form_container">
              {/* onSubmit={handleSubmit} */}
              <input
                type="text"
                placeholder="Email"
                name="email"
                // onChange={handleChange}
                // value={data.state_name}
                required
                className="input"
              />
              <input
                type="password"
                placeholder="Password"
                name="details"
                // onChange={handleChange}
                // value={data.population_male}
                required
                className="input"
              />
              {/* <input
                type="text"
                placeholder="Instructor Name"
                name="Instructor"
                // onChange={handleChange}
                // value={data.population_female}
                required
                className="input"
              />
              <input
                type="file"
                placeholder="Upload Thumbnail"
                name="thumbnail"
                // onChange={handleChange}
                // value={data.literates_male}
                required
                className="input"
              /> */}
              {/* <input
                type="number"
                placeholder="Female Literates"
                name="literates_female"
                // onChange={handleChange}
                // value={data.literates_female}
                required
                className="input"
              /> */}
              {/* {error && <div className="error_msg">{error}</div>} */}
              {/* <button type="submit" className="green_btn">
                Upload
              </button> */}
              <Button
                variant="contained"
                size="large"
                sx={{ marginTop: "20px" }}
              >
                Login
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCourse;
