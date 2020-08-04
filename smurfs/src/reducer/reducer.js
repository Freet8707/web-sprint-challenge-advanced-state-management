import { FETCH_SMURFS_START, FETCH_SMURFS_SUCCESS, FETCH_SMURFS_ERROR, POST_SMURF_SUCCESS, POST_SMURF_ERROR } from '../actions/actions'

const initialState = {
    smurfs: [],
    isFetching: false,
    error: ""
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_SMURFS_START :
            return {
                ...state,
                isFetching: true
            }
        case FETCH_SMURFS_SUCCESS :
            return {
                ...state,
                smurfs: action.payload,
                isFetching: false
            }
        case FETCH_SMURFS_ERROR :
            return {
                ...state,
                error: action.payload,
                isFetching: false
            }
        case POST_SMURF_SUCCESS :
            return {
                ...state,
                smurfs: action.payload
            }
        case POST_SMURF_ERROR :
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}