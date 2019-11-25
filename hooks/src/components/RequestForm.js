import React, { useState } from 'react'
import { changeRequest } from '../actions'


const RequestForm = ({ dispatch }) => {
    const [category, setCategory] = useState('people')
    const [index, setIndex] = useState('')

    return (
        <form className="list-group-item" onSubmit={(e) => {
            e.preventDefault()
            const data = {
                "category": category,
                "index": index
            }
            changeRequest(dispatch, data)
        }}>
            <fieldset className="form-group">
                <label className="form-check-label">
                    <legend>Category</legend>
                    <input
                        type="text"
                        name="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="form-control"
                    />
                </label>
            </fieldset>
            <fieldset className="form-group">
                <label className="form-check-label">
                    <legend>Index</legend>
                    <input
                        type="text"
                        name="index"
                        value={index}
                        onChange={(e) => setIndex(e.target.value)}
                        className="form-control"
                    />
                </label>
            </fieldset>
            <fieldset className="form-group">
                <label className="form-check-label">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </label>
            </fieldset>
        </form>
    )
}

export default RequestForm
