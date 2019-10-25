import {axiosWithAuth} from '../utils/AxiosWithAuth';
export const FETCHING_TRIP_START = 'FETCHING_TRIP_START'
export const FETCHING_TRIP_SUCCESS = 'FETCHING_TRIP_SUCCESS'
export const FETCHING_TRIP_FAILURE = 'FETCHING_TRIP_FAILURE'

export const ADDING_TRIP_START = 'ADDING_TRIP_START'
export const ADDING_TRIP_SUCCESS = 'ADDING_TRIP_SUCCESS'
export const ADDING_TRIP_FAILURE = 'ADDING_TRIP_FAILURE'

export const fetchTrip = trips => dispatch => {
    dispatch({type: FETCHING_TRIP_START})
    axiosWithAuth()
    .post('/api/user_trips/add', trips)
    .then(res => {
        // console.log(res)
        dispatch({
            type: FETCHING_TRIP_SUCCESS,
            payload: res
        })
    })
    .catch(err => console.log(err))
}

export const addTrip = trips => dispatch => {
    dispatch({type: ADDING_TRIP_START})
    axiosWithAuth()
    .post('/api/user_trips/add', trips)
    .then(res => {
        console.log(res)
        dispatch({
            type: ADDING_TRIP_SUCCESS,
            payload: res
        })
    })
    .catch(err => console.log(err))
}