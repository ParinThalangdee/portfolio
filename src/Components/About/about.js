import React from 'react'
import Grid from '@mui/material/Grid';
import Photo from '../../Assets/Misc/Parin1.jpeg';
import Avatar from '@mui/material/Avatar';
// TECH LOGO IMPORTS
import JavaScript from '../../Assets/Tech/javascript.png';
import HTML5 from '../../Assets/Tech/html-5.png';
import CSS3 from '../../Assets/Tech/css.png';
import ReactJS from '../../Assets/Tech/react.png';
import NodeJS from '../../Assets/Tech/nodejs.png';
import MySQL from '../../Assets/Tech/mysql.png';
import MongoDB from '../../Assets/Tech/mongoDB.png';
import JQuery from '../../Assets/Tech/jquery.png';
import ExpressJS from '../../Assets/Tech/express.png';

const about = () => {
  return (
    <>
      <Grid container style={{ height: '100vh' }} spacing={1}>
        {/* FIRST ROW/ FILLER */}
        <Grid item lg={12}></Grid>

        {/* SECOND ROW */}
        <Grid item lg={3}></Grid>
        <Grid item lg={3}>
          <h1>Get to know me more</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus perferendis ipsam sit, architecto reprehenderit amet nulla, ipsum laboriosam quas in quidem nisi, magnam sequi! Quasi ex animi maiores maxime unde!
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus perferendis ipsam sit, architecto reprehenderit amet nulla, ipsum laboriosam quas in quidem nisi, magnam sequi! Quasi ex animi maiores maxime unde!
          </p>
          <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus perferendis ipsam sit, architecto reprehenderit amet nulla, ipsum laboriosam quas in quidem nisi, magnam sequi! Quasi ex animi maiores maxime unde!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus perferendis ipsam sit, architecto reprehenderit amet nulla, ipsum laboriosam quas in quidem nisi, magnam sequi! Quasi ex animi maiores maxime unde!
          </p>
        </Grid>
        <Grid lg={1}></Grid>
        <Grid item lg={4}>
          <Avatar src={Photo} sx={{ height:'400px', width: '400px'}}></Avatar>
        </Grid>
        <Grid item lg={1}></Grid>

        {/* THIRD ROW */}
        <Grid container lg={12}>
          <Grid item lg={3}></Grid>
          
          <Grid item lg={1}>
            <Avatar src={JavaScript} sx={{ height:'100px', width: '100px'}}></Avatar>
          </Grid>
          
          <Grid item lg={1}>
            <Avatar src={HTML5} sx={{ height: '100px', width: '100px' }}></Avatar>
          </Grid>
          
          <Grid item lg={1}>
            <Avatar src={CSS3} sx={{ height: '100px', width: '100px' }}></Avatar>
          </Grid>
          
          <Grid item lg={1}>
            <Avatar src={ReactJS} sx={{ height: '100px', width: '100px' }}></Avatar>
          </Grid>
          
          <Grid item lg={1}>
            <Avatar src={NodeJS} sx={{ height: '100px', width: '100px' }}></Avatar>
          </Grid>
          
          <Grid item lg={1}>
            <Avatar src={MySQL} sx={{ height: '100px', width: '100px' }}></Avatar>
          </Grid>

          <Grid item lg={1}>
            <Avatar src={MongoDB} sx={{ height: '100px', width: '100px' }}></Avatar>
          </Grid>

          <Grid item lg={2}></Grid>

        </Grid>

        {/* FOURTH ROW */}
        {/* <Grid item lg={12}></Grid> */}
        <Grid container lg={12}>
          <Grid item lg={3}></Grid>

          <Grid item lg={1}>
            {/* <Avatar src={JQuery} sx={{ height: '100px', width: '100px' }}></Avatar> */}
          </Grid>

          <Grid item lg={1}>
            {/* <Avatar src={HTML5} sx={{ height: '100px', width: '100px' }}></Avatar> */}
          </Grid>

          <Grid item lg={1}>
            <Avatar src={JQuery} sx={{ height: '100px', width: '100px' }}></Avatar>
          </Grid>

          <Grid item lg={1}>
            {/* <Avatar src={ReactJS} sx={{ height: '100px', width: '100px' }}></Avatar> */}
          </Grid>

          <Grid item lg={1}>
            <Avatar src={ExpressJS} sx={{ height: '100px', width: '100px' }}></Avatar>
          </Grid>

          <Grid item lg={1}>
            {/* <Avatar src={MySQL} sx={{ height: '100px', width: '100px' }}></Avatar> */}
          </Grid>

          <Grid item lg={1}>
            {/* <Avatar src={MongoDB} sx={{ height: '100px', width: '100px' }}></Avatar> */}
          </Grid>

          <Grid item lg={2}></Grid>

        </Grid>

        {/* FIFTH ROW */}
        {/* <Grid item lg={12}></Grid> */}

      </Grid>
    </>
  )
}

export default about