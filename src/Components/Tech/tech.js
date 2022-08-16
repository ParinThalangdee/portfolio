import React from 'react';
import Grid from '@mui/material/Grid';
import TechCard from '../TechCard'
import JavaScript from '../../Assets/javascript.png';
import HTML5 from '../../Assets/html-5.png';
import CSS3 from '../../Assets/css.png';
import ReactJS from '../../Assets/react.png';
import NodeJS from '../../Assets/nodejs.png';
import MySQL from '../../Assets/mysql.png';
import MongoDB from '../../Assets/mongoDB.png';


const Tech = () => {
  let tech = [{
    techtitle: "JavaScript",
    techimage: JavaScript
  },
  {
    techtitle: "HTML5",
    techimage: HTML5 
    },
    {
      techtitle: "CSS3",
      techimage: CSS3
    },
    {
      techtitle: "React.js",
      techimage: ReactJS
    },
    {
      techtitle: "Node.js",
      techimage: NodeJS
    },
    {
      techtitle: "MySQL",
      techimage: MySQL
    },
    {
      techtitle: "mongoDB",
      techimage: MongoDB
    }
]

  return (
    <>
      <Grid container justifyContent="center">
        <h1>Technologies</h1>
      </Grid>
      <Grid container spacing={4} padding={2} justifyContent="center">
        {tech.map(technology =>
          <Grid item>
            <TechCard techtitle={technology.techtitle} techimage={technology.techimage}></TechCard>
          </Grid>
        )}

      </Grid>
    </>
  )
}

export default Tech