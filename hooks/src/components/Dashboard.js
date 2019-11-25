import React, { Fragment } from 'react'
import ItemList from './ItemList'
import RequestForm from './RequestForm'
import ItemDetail from './ItemDetail'

const Dashboard = ({ items, dispatch, current, dispatchItem }) => {
    return (
        <Fragment>
            <div className="row ml-auto">
                <div className="col-3 list-group">
                    <div className="list-group-item list-group-item-action active bg-info">
                        <h2>Items</h2>
                    </div>
                    <ItemList items={items} dispatch={dispatchItem} />
                </div>
                <div className="col-6 text-truncate list-group">
                    <div className="list-group-item list-group-item-action active bg-info">
                        <h2>Info</h2>
                    </div>
                    <ItemDetail item={current} />
                </div>
                <div className="col-3 list-group mr-auto">
                    <div className="list-group-item list-group-item-action active bg-info">
                        <h2>Select</h2>
                    </div>
                    <div className="list-group-item">
                        <RequestForm dispatch={dispatch} />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Dashboard
