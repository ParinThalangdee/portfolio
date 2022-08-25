import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import EmailIcon from '@mui/icons-material/EmailSharp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import AssignmentIcon from '@mui/icons-material/Assignment';

const footer = () => {
  return (
    <>
      <Grid container justifyContent="center" padding={4} sx={{ bgcolor: 'black'}}>
        <Grid item xs={2}></Grid>
          <Grid item xs={2}>
            <a href='mailto:Parin.Thalangdee@outlook.com' title="Email Me" style={{ textDecoration: "none", color: "white" }}>
              <EmailIcon />
            </a>
          </Grid>
          <Grid item xs={2}>
            <a href='https://www.linkedin.com/in/parinthalangdee/' title="LinkedIn Profile" target='_blank' style={{ textDecoration: "none", color: "white" }}>
              <LinkedInIcon />
            </a>
          </Grid>
          <Grid item xs={2}>
            <a href='https://github.com/ParinThalangdee' title="Github Account" target='_blank' style={{ textDecoration: "none", color: "white" }}>
              <GitHubIcon />
            </a>
          </Grid>
          <Grid item xs={2}>
            <a href='../../Assets/Documents/ParinThalangdee.pdf' title="Download Resume" download style={{ textDecoration: "none", color: "white" }}>
              <AssignmentIcon />
            </a>
          </Grid>
        </Grid>
    </>
  )
}

export default footer