import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Art from '../../Assets/Misc/LandingArt.png'


import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import AssignmentSharpIcon from '@mui/icons-material/AssignmentSharp';

const landing = () => {
  return (
    <>
      <Grid container style={{ height: '100vh', background: "lightblue"}}>

        <Grid item lg={12}></Grid> {/* VERTICAL SPACE */}

        <Grid item lg={2}></Grid>
        <Grid item lg={5}>
          <img src={Art}></img>
        </Grid>
        <Grid item lg={5} justifyContent="center" >
          <h1>Hi, I'm Parin!</h1>
          <h3>I am a full stack developer based in Southern California.</h3>
          <h3>Currently, I am freelancing so feel free to contact me!</h3>

          <Grid container lg={12}> {/* ICON CONTAINER */}
            <Grid item lg={1}></Grid>
            <Grid item lg={2}>
              <a href="mailto:Parin.Thalangdee@outlook.com" title="Email Me">
                <EmailIcon></EmailIcon>
              </a>  
            </Grid>
            <Grid item lg={2}>
              <a href="https://www.linkedin.com/in/parinthalangdee/" title="LinkedIn Account" target="_blank">
                <LinkedInIcon></LinkedInIcon>
              </a>
            </Grid>
            <Grid item lg={2}>
              <a href="https://github.com/ParinThalangdee" title="Github Account" target="_blank">
                <GitHubIcon></GitHubIcon>
              </a>
            </Grid>
          </Grid>

        </Grid>

        <Grid item lg={12}></Grid> { /*VERTICAL SPACE*/}

      </Grid>  
    </>
  )
}

export default landing