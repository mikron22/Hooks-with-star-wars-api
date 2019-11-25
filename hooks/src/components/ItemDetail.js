import React from 'react'

const ItemDetail = ({ item }) => {
    let info = []
    item !== {} && (
        info = Object.entries(item).map(([key, value], index) => {
            return (
                <tr key={key} itemScope="row">
                    <th>{index}</th>
                    <td>{key}</td>
                    <td>{value}</td>
                </tr>
            )
        })
    )
    let render = <p>Select item</p>
    info.length !== 0 && (render = (
        <table className="table">
            <thead className="thead-dark">
                <tr>
                    <th>#</th>
                    <th>Key</th>
                    <th>Value</th>
                </tr>
            </thead>
            <tbody>
                {info}
            </tbody>
        </table>))
    return (
        <div className="list-group">
            {render}
        </div>
    )
}

export default ItemDetail
