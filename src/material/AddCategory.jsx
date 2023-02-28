import { TextField } from '@mui/material';
import React, { useState } from 'react'

function AddCategory() {
    const [name, setname] = useState('');
    const [description, setdescription] = useState('');

  return (<>
    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    <TextField id="outlined-basic" label="Outlined" variant="outlined" />

  
  </>
  )
}

export default AddCategory