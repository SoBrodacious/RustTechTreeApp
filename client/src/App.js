import React from 'react'
import './App.scss'

import Header from './Header/Header'
import Tree from './Tree/Tree'

class App extends React.Component {
    render() {
        return (
            <div className='App'>
                <Header />
                <Tree />
            </div>
        )
    }
}

export default App
