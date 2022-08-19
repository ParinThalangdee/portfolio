import React from 'react'
import Grid from '@mui/material/Grid';
import Photo from '../../Assets/Misc/Parin1.jpeg';
import Avatar from '@mui/material/Avatar';

const about = () => {
  return (
    <>
      <Grid container style={{ height: '100vh' }}>
        {/* FIRST ROW/ FILLER */}
        <Grid item lg={12}></Grid>
        {/* SECOND ROW */}
        <Grid item lg={3}></Grid>
        <Grid item lg={3}>
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
        <Grid item lg={12}>
        </Grid>
        {/* FOURTH ROW */}
        <Grid item lg={12}>
        </Grid>

        {/* <Grid item lg={12}>
          FIFTH ROW
        </Grid> */}

      </Grid>
    </>
  )
}

export default about