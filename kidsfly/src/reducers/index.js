import {FETCHING_TRIP_START, FETCHING_TRIP_SUCCESS, FETCHING_TRIP_FAILURE, ADDING_TRIP_SUCCESS, ADDING_NEW_TRIP_START, ADDING_NEW_TRIP_SUCCESS ,UPDATE_TRIP_SUCCESS, REMOVE_TRIP_START, REMOVE_TRIP_SUCCESS } from '../actions/'

export const tripState = 
    {
    trip: {},
    newTrip: [],
    isEditing: false,
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
    console.log(action.payload.data)
    return {
        ...state,
        trip: action.payload.data[action.payload.data.length-2],
        isFetching: false,
        error: '',
        newTrip: action.payload.data
        

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
            trip: [...state.trip, action.payload.data]
        }
    case ADDING_NEW_TRIP_START:
                return {
                    ...state,
                    isFetching: true
                }
        case ADDING_NEW_TRIP_SUCCESS:
        return {
            ...state,
            newTrip: [...state.newTrip, action.payload.data]
        }

        case UPDATE_TRIP_SUCCESS:
            return {trip: state.trip.map(trip => trip.id === action.id ? {...trip, isEditing:!action.isEditing}:trip)}

        case REMOVE_TRIP_START:
                    return {
                        ...state,
                        isFetching: true
                    }
        case REMOVE_TRIP_SUCCESS:
            return state.newTrip.filter(newTrip => newTrip.id !== action.id)
            
        default:
            return state
}
}