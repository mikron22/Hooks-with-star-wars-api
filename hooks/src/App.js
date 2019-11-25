import React, { Fragment, useState, useEffect, useReducer } from 'react'
import NavBar from './components/NavBar'
import Dashboard from './components/Dashboard'
import { requestReducer } from './reducers'


function App() {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)
    const [request, dispatch] = useReducer(requestReducer, {
        'category': 'people',
        'index': ''
    })

    useEffect(() => {
        setLoading(true)
        fetch(`https://swapi.co/api/${request.category}/${request.index}`)
            .then(res => res.json())
            .then(data => {
                setItems(data.results)
                setLoading(false)
            }).catch(err => {
                console.log(err)
            })

    }, [request])

    const render = (
        loading ? <h1>loading...</h1> :
            <Dashboard items={items} dispatch={dispatch} />
    )

    return (
        <Fragment>
            <NavBar />
            <div className="container bg-secondaru">
                {render}
            </div>
        </Fragment>
    )
}

export default App
