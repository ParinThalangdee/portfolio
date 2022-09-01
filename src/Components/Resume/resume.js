import { Grid } from '@mui/material';
import { Document, Page } from 'react-pdf';
import ResumePDF from '../../Assets/Documents/Parin.Thalangdee.pdf';
import React from 'react';

const resume = () => {
  return (
    <>
      <Grid container>
        <Grid item lg={3} />
        <Grid item lg={6}>
          <Document file={ResumePDF}>
            <Page pageNumber={1} />
          </Document>
        </Grid>
        <Grid item lg={3} />
      </Grid>        
    </>
  )
}

export default resume