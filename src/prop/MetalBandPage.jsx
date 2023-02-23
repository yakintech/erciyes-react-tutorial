import React, { useState } from 'react'
import AddBand from './AddBand'
import BandList from './BandList'

function MetalBandPage() {

   const [bands, setbands] = useState(['Iron Maiden', 'Slipknot'])

  return (<>
    <AddBand bands={bands} setbands={setbands}/>
    <BandList bands={bands} setbands={setbands}/>
  </>)
}

export default MetalBandPage