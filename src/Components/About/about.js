import React from 'react'
import Grid from '@mui/material/Grid';
import photo from '../../Assets/Misc/Parin1.jpeg'
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
          <h1>Hi, I'm Parin!</h1>
          <p>I am a full stack developer based in Southern California. Currently, I am freelancing so feel free to contact me!</p>
        </Grid>

      </Grid>
    </Grid>
  )
}

export default about