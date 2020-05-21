import React from "react";
import { connect } from "react-redux";
import {
  Typography,
  Paper,
  TextField,
  Link,
  Grid,
  Button,
  // CssBaseline,
  RadioGroup,
  FormLabel,
  MenuItem,
  FormGroup,
  FormControl,
  FormControlLabel,
} from "@material-ui/core";
//import the action
//make a reducer for the create campaign page

const CreateCampaign = () => {
  return (
    <div style={{padding:"15px", margin:"auto", maxWidth:"600px"}}>
        <Typography variant="h4" align="center" gutterBottom color="secondary">
        Create Your Campaign
        </Typography>
        <form>
            <Paper style={{padding:"15px"}}>
                <Grid container alignItems="flex-start" spacing={2}>
                    <Grid item>
                        <TextField 
                          fullWidth
                          required
                          name="fristName"
                          type='text'
                          label="First Name"
                        />
                    </Grid>
                </Grid>
            </Paper>
        </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};
export default connect()(CreateCampaign);

//first name
//last name
//project description
//capaign goal
//upload project image
