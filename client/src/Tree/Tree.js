import './Tree.scss'

import React from 'react'
import axios from 'axios'

//import Node from './Node/Node'

class Tree extends React.Component {
    constructor() {
        super()
        this.state = {itemTree: {}}
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:4941/api/v1/tree/').then((res) => {
            return res.data
        }).then((data) =>{
            var itemTree = data
            this.setState({itemTree})
            console.log("state", this.state.itemTree)
        }).catch((err) => {
            console.error(err)
        })
    }

    render() {
        var arr = [];
        for (var prop in this.state.itemTree){
            arr.push(prop)
        }

        return (
            <div className='Tree'>
                {
                    arr.map((items =>
                        <th key="">
                            {this.state.itemTree[items].name}
                        </th>
                    ))
                }
            </div>
        )
    }
}

export default Tree
