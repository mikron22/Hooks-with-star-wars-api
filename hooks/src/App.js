import React, { Fragment, useState, useEffect, useReducer } from 'react'
import NavBar from './components/NavBar'
import Dashboard from './components/Dashboard'
import { requestReducer, itemReducer } from './reducers'
import { makeRequest, setItem } from './actions'


function App() {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)
    const [request, dispatch] = useReducer(requestReducer, {
        'category': 'people',
        'index': ''
    })
    const [currentItem, dispatchItem] = useReducer(itemReducer, {})

    useEffect(() => {
        makeRequest(setItems, setLoading, request)
    }, [request])

    useEffect(() => {
        setItem(dispatchItem, items[0])
    }, [items])

    const render = (
        loading ? <h1>loading...</h1> :
            <Dashboard
                items={items}
                dispatch={dispatch}
                current={currentItem}
                dispatchItem={dispatchItem}
            />
    )

    return (
        <Fragment>
            <div className="container">
                <NavBar />
                {render}
            </div>
        </Fragment>
    )
}

export default App
