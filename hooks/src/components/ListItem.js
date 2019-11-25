import React from 'react'

const ListItem = props => {
    return (
        <p className="list-group-item list-group-item-action">{props.info.name}</p>
    )
}

export default ListItem
