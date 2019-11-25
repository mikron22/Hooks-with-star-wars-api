import React from 'react'
import { setItem } from '../actions'

const ListItem = ({ info, dispatch }) => {
    return (
        <p onClick={(e) => setItem(dispatch, info)} className="list-group-item list-group-item-action">{info.name}</p>
    )
}

export default ListItem
