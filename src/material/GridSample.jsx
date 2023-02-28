import { Grid } from '@mui/material'
import React from 'react'

function GridSample() {
  return (<>
  <Grid container spacing={2}>
    <Grid item xs={2}>
    <p style={{borderStyle:'solid'}}>Çağatay</p>
    </Grid>
    <Grid item xs={10}>
    <p style={{borderStyle:'solid'}}>Yıldız</p>
    </Grid>
    <Grid item xs={2}>
    <p style={{borderStyle:'solid'}}>Kayseri</p>
    </Grid>
  </Grid>
  </>)
}

export default GridSample