import React from 'react'
import { Outlet } from 'react-router-dom'

function Home() {
  return (<>
      <h1>Test</h1>
    <Outlet/>
  </>
  
  )
}

export default Home