import * as React from 'react'
import Logo from './Logo'
import SearchBox from './SearchBox'

const Header = (props) => {
    return (
        <header>
            <Logo />
            <SearchBox />
        </header>
    )
}

export default Header