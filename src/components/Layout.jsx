import React from 'react'
import { Navbar, Footer } from './'

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <header>
                <Navbar />
            </header>
            <main>
                {children}
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Layout