import React from 'react'
import layout from './Layout.module.css'
import MainNavigation from './MainNavigation'

function Layout(props) {
    return (
        <div>
            <MainNavigation />
            <main className={layout.main}>
                {props.children}
            </main>
        </div>
    )
}

export default Layout