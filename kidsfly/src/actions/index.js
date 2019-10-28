import {axiosWithAuth} from '../utils/AxiosWithAuth';
export const FETCHING_TRIP_START = 'FETCHING_TRIP_START'
export const FETCHING_TRIP_SUCCESS = 'FETCHING_TRIP_SUCCESS'
export const FETCHING_TRIP_FAILURE = 'FETCHING_TRIP_FAILURE'

export const ADDING_TRIP_START = 'ADDING_TRIP_START'
export const ADDING_TRIP_SUCCESS = 'ADDING_TRIP_SUCCESS'
export const ADDING_TRIP_FAILURE = 'ADDING_TRIP_FAILURE'

export const ADDING_NEW_TRIP_START = 'ADDING_TRIP_START'
export const ADDING_NEW_TRIP_SUCCESS = 'ADDING_TRIP_SUCCESS'
export const ADDING_NEW_TRIP_FAILURE = 'ADDING_TRIP_FAILURE'

export const UPDATE_TRIP_START = 'ADDING_TRIP_START'
export const UPDATE_TRIP_SUCCESS = 'ADDING_TRIP_SUCCESS'
export const UPDATE_TRIP_FAILURE = 'ADDING_TRIP_FAILURE'

export const REMOVE_TRIP_START = 'ADDING_TRIP_START'
export const REMOVE_TRIP_SUCCESS = 'ADDING_TRIP_SUCCESS'
export const REMOVE_TRIP_FAILURE = 'ADDING_TRIP_FAILURE'

export const fetchTrip = trip => dispatch => {
    dispatch({type: FETCHING_TRIP_START})
    axiosWithAuth()
    .get("/api/user_trips",trip)
    .then(res => {
        dispatch({
            type: FETCHING_TRIP_SUCCESS,
            payload: res
        })
    })
    .catch(err => console.log(err))
}

export const fetchNewTrip = newTrip => dispatch => {
    dispatch({type: FETCHING_TRIP_START})
    axiosWithAuth()
    .get("/api/trips", newTrip)
    .then(res => {
        dispatch({
            type: FETCHING_TRIP_SUCCESS,
            payload: res
        })
    })
    .catch(err => console.log(err))
}
export const addTrip = trip => dispatch => {
    dispatch({type: ADDING_TRIP_START})
    axiosWithAuth()
    .post('/api/user_trips/add', trip)
    .then(trip => {
        // console.log("res", res.data)
        dispatch({
            type: ADDING_TRIP_SUCCESS,
            payload: trip
        })
    })
    .catch(err => console.log(err))
}

export const addNewTrip = newTrip => dispatch => {
    dispatch({type: ADDING_NEW_TRIP_START})
    axiosWithAuth()
    .post('/api/trips/add', newTrip)
    .then(newTrip => {
        // console.log("res", res.data)
        dispatch({
            type: ADDING_NEW_TRIP_SUCCESS,
            payload: newTrip
        })
    })
    .catch(err => console.log(err))
}


export const updateTrip = (id, updatedTrip) => (dispatch) => {
    dispatch({type: UPDATE_TRIP_START})
    axiosWithAuth()
    .put(`/api/user_trips/${id}`, updatedTrip)
    .then(res => {
        console.log(res.data)
        dispatch({
            type: UPDATE_TRIP_SUCCESS,
            payload: res

        })
    })
    .catch(err => console.log(err))
}
export const deleteTrip = (id) => dispatch => {
    dispatch({type: REMOVE_TRIP_START})
    axiosWithAuth()
    .delete(`/api/trips/${id}`)
    .then(res => {
        dispatch({
            type: REMOVE_TRIP_SUCCESS,
            payload: res

        })
    })
    .catch(err => console.log(err))
}