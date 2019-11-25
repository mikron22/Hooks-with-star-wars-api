export const CHANGE_REQUEST = 'CHANGE_REQUEST'
// export const GET_DATA = 'GET_DATA'


export const changeRequest = (dispatch, data) => {
    dispatch({
        'type': CHANGE_REQUEST,
        'payload': { data }
    })
    console.log(data)
}