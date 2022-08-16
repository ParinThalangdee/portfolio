import React from 'react'
import Grid from '@mui/material/Grid';
import photo from '../../Assets/Parin1.jpeg'
import Avatar from '@mui/material/Avatar';

const about = () => {
  return (
    <Grid>
      <Grid justifyContent="center" container padding={2} spacing={2}>
        <Grid item md={1}></Grid>
        <Grid item xs={12} md={4}>
          <Avatar alt="Portrait" src={photo} sx={{ width: 1, height: 1 }}></Avatar>
        </Grid>

        <Grid item md={1}></Grid>

        <Grid item xs={12} md={4}>
          <h1>Parin Thalangdee</h1>
          <p>I am currently a student who is studying html, css, and the javascript library to become a front end developer! I enjoy working in teams and love being active in groups. In my spare time, I love racing cars, offroading, and sometimes like to slow down with photography.</p>
          <ul>
            <li>JavaScript</li> 
            <li>SQL</li>
            <li>HTML5</li>
            <li>MongoDB</li>
            <li>CSS3</li>
          </ul>
          <ul>
            <li>React.js</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>JQuery</li>
            <li>MySQL Server</li>
          </ul>
          <ul>
            <li>VS Code</li>
            <li>Insomnia</li>
            <li>MongoDB Atlas</li>
            <li>MongoDB Compass</li>
            <li>Windows & MacOS</li>
          </ul>
        </Grid>

      </Grid>
    </Grid>
  )
}

export default about