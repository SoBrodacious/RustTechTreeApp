import * as React from 'react'
import './Node.scss'

interface Props {
    item: itemTreeDec
}

export interface itemTreeDec {
    id: string;
    data: Data;
}

export interface Data {
    name: string;
    scrap_cost: string;
    tech_level: string;
    type: string;
    parent?: any;
}

interface State {}

export default class Node extends React.Component<Props, State> {
    render() {
        return <div className='Node'>
            <span>{ this.props.item.data.name }</span>
        </div>
    }
}
