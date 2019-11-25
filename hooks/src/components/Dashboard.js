import React, { Fragment } from 'react'
import PlanetList from './PlanetList'
import RequestForm from './RequestForm'

const Dashboard = ({ items, dispatch }) => {
    return (
        <Fragment>
            <div className="row">
                <div className="col-3 list-group">
                    <div className="list-group-item list-group-item-action active bg-info">
                        <h2>Items</h2>
                    </div>
                    <PlanetList items={items} />
                </div>
                <div className="col-6" />
                <div className="col-3 list-group">
                    <div className="list-group-item list-group-item-action active bg-info">
                        <h2>Select</h2>
                    </div>
                    <div className="list-group-item list-group-item-action">
                        <RequestForm dispatch={dispatch} />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Dashboard
