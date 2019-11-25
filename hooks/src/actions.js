export const CHANGE_REQUEST = 'CHANGE_REQUEST'
export const SET_ITEM = 'SET_ITEM'


export const changeRequest = (dispatch, data) => {
    dispatch({
        type: CHANGE_REQUEST,
        payload: data
    })
}

export const setItem = (dispatch, item) => {
    dispatch({
        type: SET_ITEM,
        payload: item
    })
}

export const makeRequest = (setItems, setLoading, request) => {
    setLoading(true)
    fetch(`https://swapi.co/api/${request.category}/${request.index}`)
        .then(res => res.json())
        .then(data => {
            let newData = []
            request.index === '' ? newData = data.results :
                newData[0] = data
            setItems(newData)
            setLoading(false)
            document.title = request.category.toUpperCase()
        }).catch(err => {
            console.log(err)
        })
}