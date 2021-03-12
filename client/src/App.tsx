import * as React from 'react'
import './App.scss'

import Header from './Header/Header'
import Tree from './Tree/Tree'

interface Props {}

interface State {}

export default class App extends React.Component<Props, State> {
    render() {
        return (
            <div className='App'>
                <Header />
                <Tree />
            </div>
        )
    }
}
