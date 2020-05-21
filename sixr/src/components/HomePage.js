import React from 'react'
import { Card, CardContent, Grid, Button, Typography } from '@material-ui/core'
import { makeStyles, useTheme } from "@material-ui/styles";
import Lauren_Chil_work  from '../assets/Lauen_Chil_work.svg'

const useStyles = makeStyles((theme) => ({
    mainImage: {
        backgroundImage: `url(${Lauren_Chil_work})`,
        backgroundPosition:"center",
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat",
        height:"100%",
        width:"100%",
    },
    imageCard : {
        position: 'absolute',
        // boxShadow: 
    },
    buttonStyle : {
        width:"200px",
        height: "45px",
        margin:" 1em auto 0",
    },
    mainCardFont: {
        ...theme.typography.tab,
        marginTop:"3em",
        marginBottom:"3em"
      },
      cardStyle : {
          width:"500px",
          position:"absolute",
      }
}))



const HomePage = () => {
    const homePage_styles = useStyles()
    return (
        <>
         <Grid item >
             <Grid container alignItems="center" justify="center" style={{height:"30em"}}>
             <Card className={homePage_styles.cardStyle}>
                 <CardContent>
                     <Grid container direction="column" style={{textAlign:"center"}}>
                        <Grid item>
                            <Typography variant="h3" style={{marginBottom:".5em"}}>Sixr</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="p" className={homePage_styles.mainCardFont}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</Typography>
                        </Grid>
                        <Button variant="contained" color="secondary" className={homePage_styles.buttonStyle}  >Create A Campaing</Button>
                     </Grid>
                 </CardContent>
             </Card>
             <div className={homePage_styles.mainImage}/>
             </Grid>
         </Grid>
        </>
    )
}

export default HomePage
