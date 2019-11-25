import React, { Fragment } from 'react'
import ListItem from './ListItem'

const ItemList = ({ items, dispatch }) => {

    const listItems = items.map(item => {
        return <ListItem key={item.name} info={item} dispatch={dispatch} />
    })

    return (
        <Fragment>
            {listItems}
        </Fragment>
    )
}

export default ItemList
