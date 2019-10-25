import {FETCHING_TRIP_START, FETCHING_TRIP_SUCCESS, FETCHING_TRIP_FAILURE, ADDING_TRIP_SUCCESS} from '../actions/'

const tripState = {
    trip: {},
    isFetching: false,
    error: ''
}

export const reducer = (state = tripState, action) => {
switch(action.type) {
    case FETCHING_TRIP_START:
        return {
            ...state,
            isFetching: true
        }
    case FETCHING_TRIP_SUCCESS: 
    return {
        ...state,
        trip: action.payload.data,
        isFetching: false,
        error: ''
    }
    case FETCHING_TRIP_FAILURE:
        return {
            ...state,
            isFetching: false,
            error: action.payload.error
        }
    case ADDING_TRIP_SUCCESS:
        return {
            ...state,
            trip: action.payload
        }

        default:
            return state
}
}