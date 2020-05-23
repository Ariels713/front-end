import React from "react";
import {
  Card,
  CardContent,
  Grid,
  Button,
  Typography,
  Paper,
} from "@material-ui/core";
const Dashboard = () => {
  return (
    <>
      <Grid container style={{width:"90%", padding:"1em"}}>
        <Grid item xs={4}>
          <Typography variant="h4">Raised: (data from backend) </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
