import React from 'react'
import Grid from '@mui/material/Grid';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
// import './footer.css'

const footer = () => {
  return (
    <>
      <Grid className="footer" container justifyContent="center" spacing={4} padding={2}>
        <Grid item xs={12} md={2}>
          <a href="https://github.com/ParinThalangdee" target="_blank">
            <GitHubIcon></GitHubIcon>
          </a>
        </Grid>
        <Grid item xs={12} md={2}>
          <a href="https://www.linkedin.com/in/parinthalangdee/" target="_blank">
            <LinkedInIcon></LinkedInIcon>
          </a>
        </Grid>
        <Grid item xs={12} md={2}>
          <a href="https://www.instagram.com/lotteman" target="_blank">
            <InstagramIcon></InstagramIcon>
          </a>
        </Grid>
      </Grid>
    </>
  )
}

export default footer