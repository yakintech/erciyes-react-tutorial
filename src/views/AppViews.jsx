import React from 'react'
import { Link, Outlet, Route, Routes } from 'react-router-dom'
import About from '../routersample/About'
import Blog from '../routersample/Blog'
import Contact from '../routersample/Contact'
import Dashboard from '../routersample/Dashboard'
import DashboardMessages from '../routersample/DashboardMessages'
import DashboardTasks from '../routersample/DashboardTasks'
import Home from '../routersample/Home'
import NotFound from '../routersample/NotFound'
import ProductDetail from '../routersample/ProductDetail'
import Products from '../routersample/Products'

function AppViews() {
  return (
    <>
    <ul style={{ display: 'flex', justifyContent: 'space-between' }}>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/blog'>Blog</Link></li>
      <li><Link to='/contact'>Contact</Link></li>
      <li><Link to='/products'>Products</Link></li>
    </ul>

    <hr></hr>

    <Routes>


      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/blog" element={<Blog />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/products" element={<Products />}></Route>
      <Route path="/products/:id" element={<ProductDetail />}></Route>

      {/* <Route path="/dashboard" element={<Dashboard/>}>
        <Route path="messages" element={<DashboardMessages/>}></Route>
        <Route path="task" element={<DashboardTasks/>}></Route>
      </Route> */}

      <Route path="*" element={<NotFound />}></Route>

    
      </Routes>
    <hr></hr>
    <h1>Site Footer</h1>
  </>
  )
}

export default AppViews