import './Tree.scss'

import * as React from 'react'
import axios from 'axios'

import Node from './Node/Node'

interface Props {}

interface State {
    itemTree: itemTreeDec[]
}

export interface Data {
    name: string
    scrap_cost: string
    tech_level: string
    type: string
    parent?: any
}

export interface itemTreeDec {
    id: string
    data: Data
}

export default class Tree extends React.Component<Props, State> {
    state: State = {
        itemTree: [],
    }

    componentDidMount() {
        this.getTreeFromApi()
    }

    getTreeFromApi = () => {
        axios
            .get('http://127.0.0.1:4941/api/v1/tree/')
            .then((res) => {
                return res.data
            })
            .then((data) => {
                var itemTree = data
                this.setState({ itemTree })
                console.log('state', this.state.itemTree)
            })
            .catch((err) => {
                console.error(err)
            })
    }

    render() {
        return (
            <div className='Tree'>
                {this.state.itemTree.map((item) => (
                    <Node key={item.id} item={item} />
                ))}
            </div>
        )
    }
}
