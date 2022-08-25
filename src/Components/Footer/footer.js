import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import EmailIcon from '@mui/icons-material/EmailSharp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import AssignmentSharpIcon from '@mui/icons-material/AssignmentSharp';

const footer = () => {
  return (
    <>
      <Grid container justifyContent="center" padding={4} sx={{ bgcolor: 'black'}}>
        <Grid item xs={2}></Grid>
          <Grid item xs={2}>
          <a href='mailto:Parin.Thalangdee@outlook.com' title="Email Me" style={{ textDecoration: "none", color: "white" }}>
              <EmailIcon></EmailIcon>
            </a>
          </Grid>
          <Grid item xs={2}>
          <a href='https://www.linkedin.com/in/parinthalangdee/' title="LinkedIn Profile" target='_blank' style={{ textDecoration: "none", color: "white" }}>
              <LinkedInIcon></LinkedInIcon>
            </a>
          </Grid>
          <Grid item xs={2}>
          <a href='https://github.com/ParinThalangdee' title="Github Account" target='_blank' style={{ textDecoration: "none", color: "whjte" }}>
              <GitHubIcon></GitHubIcon>
            </a>
          </Grid>
          <Grid item xs={2}>
          <a href='../../Assets/Documents/ParinThalangdee.pdf' title="Download Resume" download style={{ textDecoration: "none", color: "white" }}>
              <AssignmentSharpIcon></AssignmentSharpIcon>
            </a>
          </Grid>
        </Grid>
    </>
  )
}

export default footer