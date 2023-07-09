import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import MultipleSelectChip from "./Multiselect";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import React, { useState } from "react";
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import { Paper } from "@mui/material";
import Box from "@mui/material/Box";
import NavBar from "./NavBar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import URI from "../URI";
const defaultTheme = createTheme();

function App() {
  const [justifyActive, setJustifyActive] = useState("tab1");
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [flag, setFlag] = useState(false);
  const [password, setpassword] = useState("");
  const [qualification, setqualification] = useState("");
  const [proficiency, setproficiency] = useState([]);
  const [experience, setexperience] = useState(null);
  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  const navigate = useNavigate();

  const HandleStudentSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, password);
    const postData = async () => {
      try {
        const res = await axios.post(`${URI}/api/auth/student/register`, {
          name,
          email,
          password,
        });
        if (res) {
          console.log(res);
        }
        if (res && res.data.success) {
          setFlag(true);
        }
      } catch (error) {
        console.log(error);
      }
    };
    postData();
  };
  const HandleTeacherSubmit = (e) => {
    e.preventDefault();

    const postData = async () => {
      try {
        const res = await axios.post(`${URI}/api/auth/teacher/register`, {
          name,
          email,
          password,
          qualification,
          proficiency,
          experience,
        });
        if (res) {
          console.log(res);
        }
        if (res && res.data.success) {
          setFlag(true);
        }
      } catch (error) {
        console.log(error);
      }
    };
    postData();
  };
  // console.log(name, email, password, qualification, proficiency, experience);
  return (
    <ThemeProvider theme={defaultTheme}>
      <NavBar />
      {flag && (
        <Stack sx={{ width: "100%" }} spacing={2}>
          <Alert severity="success">
            Registeration Successfull.Check your email.
          </Alert>
        </Stack>
      )}
      <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
        <Paper>
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
            <MDBTabs
              pills
              justify
              className="mb-3 d-flex flex-row justify-content-between"
            >
              <MDBTabsItem>
                <MDBTabsLink
                  onClick={() => handleJustifyClick("tab1")}
                  active={justifyActive === "tab1"}
                >
                  Student
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem>
                <MDBTabsLink
                  onClick={() => handleJustifyClick("tab2")}
                  active={justifyActive === "tab2"}
                >
                  Teacher
                </MDBTabsLink>
              </MDBTabsItem>
            </MDBTabs>

            <MDBTabsContent>
              <MDBTabsPane show={justifyActive === "tab1"}>
                <form
                  onSubmit={HandleStudentSubmit}
                  className="text-center mb-3"
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        autoComplete="given-name"
                        name="Name"
                        required
                        fullWidth
                        id="Name"
                        label="Name"
                        autoFocus
                        onChange={(e) => {
                          setname(e.target.value);
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        onChange={(e) => {
                          setemail(e.target.value);
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="new-password"
                        onChange={(e) => {
                          setpassword(e.target.value);
                        }}
                      />
                    </Grid>
                  </Grid>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Sign Up
                  </Button>
                  <Grid container justifyContent="flex-end">
                    <Grid item>
                      <Link href="/login" variant="body2">
                        Already have an account? Sign in
                      </Link>
                    </Grid>
                  </Grid>
                </form>
              </MDBTabsPane>

              <MDBTabsPane show={justifyActive === "tab2"}>
                <div className="text-center mb-3">
                  {/* <p>Sign un with:</p> */}

                  <div
                    className="d-flex justify-content-between mx-auto"
                    style={{ width: "40%" }}
                  >
                    <MDBBtn
                      tag="a"
                      color="none"
                      className="m-1"
                      style={{ color: "#1266f1" }}
                    >
                      <MDBIcon fab icon="facebook-f" size="sm" />
                    </MDBBtn>

                    <MDBBtn
                      tag="a"
                      color="none"
                      className="m-1"
                      style={{ color: "#1266f1" }}
                    >
                      <MDBIcon fab icon="twitter" size="sm" />
                    </MDBBtn>

                    <MDBBtn
                      tag="a"
                      color="none"
                      className="m-1"
                      style={{ color: "#1266f1" }}
                    >
                      <MDBIcon fab icon="google" size="sm" />
                    </MDBBtn>

                    <MDBBtn
                      tag="a"
                      color="none"
                      className="m-1"
                      style={{ color: "#1266f1" }}
                    >
                      <MDBIcon fab icon="github" size="sm" />
                    </MDBBtn>
                  </div>

                  {/* <p className="text-center mt-3">or:</p> */}
                </div>
                <form onSubmit={HandleTeacherSubmit}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        autoComplete="given-name"
                        name="Name"
                        required
                        fullWidth
                        id="Name"
                        label="Name"
                        autoFocus
                        onChange={(e) => {
                          setname(e.target.value);
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        onChange={(e) => {
                          setemail(e.target.value);
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="new-password"
                        onChange={(e) => {
                          setpassword(e.target.value);
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        name="qualification"
                        label="Qualification"
                        type="string"
                        id="password"
                        // autoComplete="new-password"
                        onChange={(e) => {
                          setqualification(e.target.value);
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        name="experience"
                        label="Experience"
                        type="Number"
                        id="experience"
                        autoComplete="new-password"
                        onChange={(e) => {
                          setexperience(e.target.value);
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <MultipleSelectChip setproficiency={setproficiency} />
                    </Grid>
                  </Grid>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Sign Up
                  </Button>
                  <Grid container justifyContent="flex-end">
                    <Grid item>
                      <Link href="/login" variant="body2">
                        Already have an account? Sign in
                      </Link>
                    </Grid>
                  </Grid>
                </form>
              </MDBTabsPane>
            </MDBTabsContent>
          </Box>
        </Paper>
      </MDBContainer>
    </ThemeProvider>
  );
}

export default App;
