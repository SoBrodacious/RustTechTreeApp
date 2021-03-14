import * as React from 'react'
import './Node.scss'

import Details from './Details/Details'

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

interface State {
    detailsShown: boolean
}

export default class Node extends React.Component<Props, State> {
    constructor(props: Props | Readonly<Props>) {
        super(props)
        this.state = { detailsShown: false }
    }

    toggleDetails = () => {
        this.setState({ detailsShown: !this.state.detailsShown })
    }

    detailsPane = () => {
        if (this.state.detailsShown) {
            return (
                <Details item={this.props.item}/>
            )
        }
    }

    render() {
        var imageUrl
        if (this.props.item.data.image !== '') {
            imageUrl = 'data:image/png;base64,' + this.props.item.data.image
        }

        return (
            <div className='Node'>
                <div className='icon-btn' onClick={this.toggleDetails}>
                    {imageUrl !== undefined ? (
                        <img
                            className='icon-img'
                            src={imageUrl}
                            alt='jefe'
                        ></img>
                    ) : (
                        <p className='icon-no-image'>no image</p>
                    )}
                </div>
                {this.detailsPane()}
            </div>
        )
    }
}
