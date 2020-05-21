import React, { useState } from "react";
import {
  Card,
  CardContent,
  Grid,
  Button,
  Typography,
  TextField,
  CircularProgress,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { contactUsAction } from "../store/actions/contactUsAction";

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

const Contact_Us = (props) => {
  const [formData, setFormData] = useState({
    loading: false,
  });

  const classes = useStyles();

  const handleSubmit = (event) => {
    event.preventDefault();
    props.contactUsAction()
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
      {props.isSubmitted ? (
        <>
              <Typography variant="h4" color="secondary" style={{textAlign:"center", margin:"2em auto"}}>We'll Reach out soon!</Typography>
        </>
      ) : (
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
                <CardContent style={{ textAlign: "center" }}>
                  <form onSubmit={handleSubmit}>
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
                    <Button
                          variant="contained"
                          className={classes.button_style}
                          onClick={handleSubmit}
                          disabled={formData.loading}
                        >
                          Submit
                        </Button>
                    </Grid>
                  </form>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    isSubmitted: state.contactUsReducer.isSubmitted,
  };
};

export default connect(mapStateToProps, { contactUsAction })(Contact_Us);
