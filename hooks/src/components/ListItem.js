import React, { useState, useEffect } from 'react'

const ListItem = props => {
    return (
        <a className="list-group-item list-group-item-action">{props.info.name}</a>
    )
}

export default ListItem
