import { Box, TextField, styled, Button, Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState, useContext, useEffect } from "react";
import { API } from "../../service/api";
import { DataContext } from "../../context/DataProvider";
import { useNavigate } from "react-router-dom";

const Component = styled(Box)`
  width: 550px;
  margin: auto;
  margin-top: 70px;
  padding: 25px 25px;
  box-shadow: 4px 4px 4px 4px rgb(0 0 9 /0.4);
`;
const Image = styled("img")`
  width: 200px;
  margin: auto;
  display: flex;
  padding: 50-px 0 0;
`;

const Error = styled(Typography)`
  font-size: 10px;
  margin-top: 10pz;
  font-weight: 600;
`;

const Wrapper = styled(Box)`
padding: 25px 30px;
display: flex;
flex:1;
flex-direction: column;
&> div, &> button(
    margin-top: 20px;
)
`;

const signupvalues = {
  name: "",
  username: "",
  state: "",
  collegeName: "",
  education: "",
  email: "",
  password: "",
};

const loginvalues = {
  username: "",
  password: "",
};

// const signupuser = async ()=>{
//    let response = await API.userSignup(signup);
// }
const Login = ({ isUserAuthenticated }) => {
  const [signup, setSignup] = useState(signupvalues);

  //for storing signup info
  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };
  const [error, setError] = useState("");
  const [account, toggleAccount] = useState("login");
  const [login, setLogin] = useState(loginvalues);
  const { setAccount } = useContext(DataContext);
  const navigate = useNavigate();

  const toggleSignup = () => {
    account === "signup" ? toggleAccount("login") : toggleAccount("signup");
  };
  const imageURL =
    "https://ck12live.s3.ap-south-1.amazonaws.com/user/5f688627ac992228651c21b1/classroom/original/1607234971537-login.png";
  // 'https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png';

  const signupUser = async () => {
    //calling api
    let response = await API.userSignup(signup);
    if (response.isSuccess) {
      setError("");
      setSignup(signupvalues);
      toggleAccount("login");
      window.localStorage.setItem("isLoggedin", true);
    } else {
      setError("Something went wrong try again later");
    }
  };

  const loginUser = async () => {
    let response = await API.userLogin(login);
    if (response.isSuccess) {
      //setError(' ');
      sessionStorage.setItem(
        "accessToken",
        `Bearer ${response.data.accessToken}`
      );
      sessionStorage.setItem(
        "refreshToken",
        `Bearer ${response.data.refreshToken}`
      );

      setAccount({
        username: response.data.username,
        email: response.data.email,
      });
      isUserAuthenticated(true);
      setLogin(loginvalues);
      navigate("/");
    } else {
      setError("Something went wrong try again later");
    }
  };

  //for storing login info
  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const [states, setStates] = useState([]);
  const [colleges, setColleges] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  useEffect(() => {
    // Fetch data from API
    fetch("http://localhost:3001/allstates", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify(states)
    })
      .then((response) => response.json())
      .then((states) => setStates(states))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  const handleChange = (event) => {
      setSelectedState(event.target.value);
      fetchColleges();
  };

  const fetchColleges = () => {
    fetch("http://localhost:3001/colleges/state", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
          State: selectedState, // Pass the selected state as a header
          Offset:50,
      },
      body: JSON.stringify({}), // Add request body if needed
    })
      .then((response) => response.json())
      .then((colleges) => setColleges(colleges))
          .catch((error) => console.error("Error fetching data:", error));
      console.log(colleges)
  };

  return (
    <Component>
      <Box>
        <Image src={imageURL} alt="login" />
        {account === "login" ? (
          <Wrapper>
            <TextField
              variant="standard"
              value={login.username}
              onChange={(e) => onValueChange(e)}
              name="username"
              label="Enter Username"
            />
            <TextField
              variant="standard"
              value={login.password}
              onChange={(e) => onValueChange(e)}
              name="password"
              label="Enter Password"
            />
            <Button variant="contained" onClick={() => loginUser()}>
              Login
            </Button>
            <p style={{ textAlign: "center" }}>OR</p>
            <Button onClick={() => toggleSignup()}>Create an account</Button>
          </Wrapper>
        ) : (
          <Wrapper>
            <TextField
              variant="standard"
              value={signup.name}
              onChange={(e) => onInputChange(e)}
              name="name"
              label="Enter your name"
            />
            <TextField
              variant="standard"
              value={signup.username}
              onChange={(e) => onInputChange(e)}
              name="username"
              label="Enter Username"
            />
           
            <InputLabel id="demo-simple-select-label-2">State</InputLabel>

            <Select
              labelId="demo-simple-select-label-2"
              id="demo-simple-select-2"
              name="collegeName"
              label="college"
              value={selectedState}
              onChange={handleChange}
            >
              {states.map((item) => (
                <MenuItem  value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
            <InputLabel id="demo-simple-select-label">College</InputLabel>

            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={signup.collegeName}
              name="collegeName"
              label="college"
              onChange={(e) => onInputChange(e)}
            >
              {colleges.map((college) => (
                <MenuItem  value={college}>
                  {Object.values(college)[2]}
                </MenuItem>
              ))}
            </Select>

            <TextField
              variant="standard"
              value={signup.email}
              onChange={(e) => onInputChange(e)}
              name="email"
              label="Enter email"
            />
            <TextField
              variant="standard"
              value={signup.education}
              onChange={(e) => onInputChange(e)}
              name="education"
              label="Enter course (e.g. computer science)"
            />
            <TextField
              variant="standard"
              value={signup.password}
              onChange={(e) => onInputChange(e)}
              name="password"
              label="Enter Password"
            />

            {error && <Error>{error}</Error>}

            <Button onClick={() => signupUser()} variant="contained">
              Sign Up
            </Button>
            <p style={{ textAlign: "center" }}>OR</p>
            <Button onClick={() => toggleSignup()}>
              Already have an account?
            </Button>
          </Wrapper>
        )}
      </Box>
    </Component>
  );
};

export default Login;
