import { Alert, Button } from '@mui/material'
import React from 'react'

function MaterialIntro() {
  return (<>
    <Button variant='contained'>Hello Material</Button>
    <Alert severity='error'>This is an error alert — check it out!</Alert>

  </>
  )
}

export default MaterialIntro