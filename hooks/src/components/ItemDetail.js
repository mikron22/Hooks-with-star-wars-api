import React from 'react'

const ItemDetail = ({ item }) => {
    let info = ''
    item ? (info = Object.entries(item).map(([key, value], index) => {
        return (
            <tr key={key} itemScope="row">
                <th>{index}</th>
                <td>{key}</td>
                <td>{value}</td>
            </tr>
        )
    })) : (info = <p>Select item</p>)
    return (
        <div className="list-group">
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
            </table>
        </div>
    )
}

export default ItemDetail
