import React, { useState } from "react";
import {
  Card,
  CardContent,
  Grid,
  Button,
  Typography,
  TextField,
  CircularProgress,
  FormHelperText,
  TextareaAutosize
} from "@material-ui/core";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import fakeAPICallForTesting from "../utils/fakeAPICallForTesting";

const useStyles = makeStyles((theme) => ({
  button_style: {
    marginTop: "1rem",
    height: 35,
    width: 160,
    backgroundColor: "#FEC21E",
    color: "white",
  },
  loader_stylers: {
    color: "#FF0001",
    position: "absolute",
    // top: '10%',
    left: "48%",
    marginTop: "1.5rem",
  },
  login: {
    marginTop: "5rem",
  },
  error_message: {
    color: "#FF0001",
    textAlign: "center",
  },
  cardStyle: {
    width: "500px",
  },
}));

const Contact_Us = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
    loading: false,
  });
  console.log("%c Form Data", "color:yellow", formData);

  const classes = useStyles();

  const handleSubmit = (event) => {
    event.preventDefault();
    // setLoading(true);
    // axios
    // .post("http://localhost:5000/api/login", userData)
    //   .then((res) => {
    //     localStorage.setItem("token",res.data.payload);
    //     history.push("/bubblepage")
    //   })
    //   .then(setLoading(false))
    //   .then(() => {
    //       setUserData({
    //           username:"",
    //           password:""
    //       })
    //   })

    //   .catch(() => {
    //       setError(true)
    //   });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  return (
    <>
        <Grid item>
            <Typography
            variant="h4"
            style={{ textAlign: "center", marginTop: "1em" }}
            >
            Contact Us
            </Typography>
        </Grid>
        <Grid item>
            <Grid
            container
            alignItems="center"
            justify="center"
            style={{ height: "20em" }}
            >
            <Card className={classes.cardStyle}>
                <CardContent style={{textAlign:"center"}}>
                <form>
                    <Grid item>
                    <TextField
                        label="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    /> 
                    </Grid>
                    <Grid item>
                        <TextField
                            label="Email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item>
                    {formData.loading === false ? (
                        <Button
                        variant="contained"
                        className={classes.button_style}
                        onClick={handleSubmit}
                        disabled={formData.loading}
                        >
                        Submit
                        </Button>
                    ) : (
                        <CircularProgress
                        size={24}
                        className={classes.loader_stylers}
                        label="Loading"
                        />
                    )}
                    </Grid>
                </form>
                </CardContent>
            </Card>
            </Grid>
        </Grid>
    </>
  );
};

export default Contact_Us;

//   return (
//     <Grid container direction="column" alignItems="center">
//       <Grid item container direction="column" lg={4} >
//         <Grid item>
//           <Grid container direction="column">
//             <Grid item>
//               <Typography variant="h6" className={classes.login}>
//                 Log In
//               </Typography>
//             </Grid>
//             {error && (
//               <FormHelperText className={classes.error_message}>
//                 {errorMessage}
//               </FormHelperText>
//             )}
//             <form>
//               <Grid item>
//                 <TextField
//                   label="Email"
//                   id="email"
//                   name="username"
//                   value={userData.username}
//                   onChange={handleChange}
//                 />
//               </Grid>
//               <Grid item>
//                 <TextField
//                   label="Password"
//                   id="password"
//                   name="password"
//                   value={userData.password}
//                   onChange={handleChange}
//                 />
//               </Grid>
//               <Grid item>
//                 {loading === false ? (
//                   <Button
//                     variant="contained"
//                     className={classes.button_style}
//                     onClick={handleSubmit}
//                     disabled={loading}
//                   >
//                     Submit
//                   </Button>
//                 ) : (
//                   <CircularProgress
//                     size={24}
//                     className={classes.loader_stylers}
//                     label="Loading"
//                   />
//                 )}
//               </Grid>
//             </form>
//           </Grid>
//         </Grid>
//       </Grid>
//     </Grid>
//   );
// };

// export default LogInForm;
