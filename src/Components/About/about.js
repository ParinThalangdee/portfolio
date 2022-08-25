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
import OOP from '../../Assets/Tech/OOP.png'
// AWARD BADGES
import HTMLBadge from '../../Assets/Awards/UCI-HTMLbadge.png'
import JSBadge from '../../Assets/Awards/UCI-JS.JQueryBadge.png'
import NodeExpress from '../../Assets/Awards/UCI-NodeJS.ExpressJS.png'
import ReactBadge from '../../Assets/Awards/UCI-ReactJSbadge.png'
import SQLBadge from '../../Assets/Awards/UCI-SQL.NoSQLbadge.png'

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
          <p>
            I am a full stack developer with a passion for building and optimization. At a young age I have always loved figuring out how things worked and how their process can be streamlined and made more efficient. From tinkering with cars eventually leading to creating with code.
          </p>
          <p>
            After realizing my talent for abstract problem solving and passion for building, I attended the University of California Irvine for their coding camp to persue a career in software development. Coding has become a daily routine as I learn more exciting new methods and technogolies I can add to my toolbox of skills.
          </p>
          <p>
            While not coding, I still enjoy working on my car and taking it to the racetrack. Similarly to code, a solid foundation and an endless pursuit of optimization is paramount in racing. 
          </p>
        </Grid>

        <Grid item lg={1}></Grid>
        {/* PORTRAIT */}
        <Grid item lg={3}>
          <Avatar src={Photo} sx={{ height:'400px', width: '400px'}}></Avatar>
        </Grid>

        {/* THIRD ROW */}
        <Grid container lg={12}>
          
          <Grid item lg={2.75}></Grid>

          <Grid item lg={1}>
            <Avatar src={HTMLBadge} sx={{ height: '200px', width: '200px' }}></Avatar>
          </Grid>

          <Grid item lg={.5}></Grid>

          <Grid item lg={1}>
            <Avatar src={JSBadge} sx={{ height: '200px', width: '200px' }}></Avatar>
          </Grid>

          <Grid item lg={.5}></Grid>

          <Grid item lg={1}>
            <Avatar src={NodeExpress} sx={{ height: '200px', width: '200px' }}></Avatar>
          </Grid>

          <Grid item lg={.5}></Grid>

          <Grid item lg={1}>
            <Avatar src={ReactBadge} sx={{ height: '200px', width: '200px' }}></Avatar>
          </Grid>

          <Grid item lg={.5}></Grid>

          <Grid item lg={1}>
            <Avatar src={SQLBadge} sx={{ height: '200px', width: '200px' }}></Avatar>
          </Grid>

          <Grid item lg={2}></Grid>

        </Grid>

        {/* FOURTH ROW */}
        <Grid item lg={12}></Grid>

        {/* FIFTH ROW */}
        <Grid item lg={12}></Grid>

      </Grid>
    </>
  )
}

export default about