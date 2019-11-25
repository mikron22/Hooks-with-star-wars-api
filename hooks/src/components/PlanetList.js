import React, { Fragment } from 'react'
import ListItem from './ListItem'

const PlanetList = props => {

    const items = props.items.map(item => {
        return <ListItem key={item.name} info={item} />
    })

    return (
        <Fragment>
            {items}
        </Fragment>
    )
}

export default PlanetList
