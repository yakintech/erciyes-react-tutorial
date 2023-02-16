import React from 'react'
import About from './About'
import Contact from './Contact'
import OurMenu from './OurMenu'

function PageContent() {
    return (
        <div className="w3-content" style={{ maxWidth: 1100 }}>
            <About/>
            <OurMenu/>
            <Contact/>
        </div>
    )
}

export default PageContent