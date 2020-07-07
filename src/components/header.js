import React from 'react'
import { Link } from 'gatsby'

import headerStyles from './header.module.scss'

const Header = () => {

    return (
        <>
            <header className={headerStyles.header}>
            <h1 className={headerStyles.title}>Jameel Ahmed</h1>
            <nav>
                <ul className={headerStyles.navlist}>
                    <li><Link to="/" className={headerStyles.navitem} activeClassName={headerStyles.navitemactive} > Home </Link></li>
                    <li><Link to="/blog" className={headerStyles.navitem} activeClassName={headerStyles.navitemactive} > Blog </Link></li>
                    <li><Link to="/about" className={headerStyles.navitem} activeClassName={headerStyles.navitemactive} > About </Link></li>
                    <li><Link to="/contact" className={headerStyles.navitem} activeClassName={headerStyles.navitemactive} > Contact</Link></li>
                </ul>
            </nav>
            </header>
        </>
        
    )
}

export default Header;