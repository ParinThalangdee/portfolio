import { Grid } from '@mui/material'
import React from 'react'

const resume = () => {
  return (
    <>
      <Grid container>
        <Grid item lg={3} />
        <Grid item lg={6}>
          <embed src="../../Assets/Documents/Parin.Thalangdee.pdf" width='800px' height='2100px' />
        </Grid>
        <Grid item lg={3} />
      </Grid>        
    </>
  )
}

export default resume