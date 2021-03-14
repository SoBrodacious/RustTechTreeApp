import * as React from 'react'
import './Details.scss'

interface Props {
    item: itemTreeDec
}

export interface itemTreeDec {
    id: string
    data: Data
}

export interface Data {
    name: string
    scrap_cost: string
    tech_level: string
    type: string
    parent?: any
    image: string
}

interface State {}

export default class Node extends React.Component<Props, State> {
    render() {
        return (
            <div className='Details-Pane'>
                <p>{this.props.item.data.name}</p>
                <p>Scrap: {this.props.item.data.scrap_cost}</p>
                <p>Tech level: {this.props.item.data.tech_level}</p>
            </div>
        )
    }
}
