import React from 'react'

import { Search, Result, Header, Footer } from './containers';
import './App.css'

const App = () => {
    return (
        <div className='App'>
            <Header />
            <Search />
            <Result />
            <Footer />
        </div>
    )
}

export default App