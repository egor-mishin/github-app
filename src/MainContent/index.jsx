import * as React from 'react'
import Title from './Title'
import Repos from './Repos'
import Pagination from './Pagination'

const MainContent = (props) => {
    return (
        <main>
            <Title />
            <Repos />
            <Pagination />
        </main>
    )
}

export default MainContent