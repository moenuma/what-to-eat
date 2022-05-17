import React from 'react'

import { Search, Result, Header, Footer } from './containers';
import './App.css'

class App extends React.Component {
    render() {
        return (
            <div className='App'>
                <Header />
                <Search />
                <Result />
                <Footer />
            </div>
        )
    }
}

// const App = () => {
//     return (
//         <div className='App'>
//             <Header />
//             <Search />
//             <Result />
//             <Footer />
//         </div>
//     )
// }

export default App