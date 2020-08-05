import axios from 'axios'

export const FETCH_SMURFS_START = 'FETCH_SMURFS_START';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_ERROR = 'FETCH_SMURFS_ERROR';

export const getSmurfs = () => dispatch => {
    dispatch({type: FETCH_SMURFS_START})
    axios.get("http://localhost:3333/smurfs")
    .then(res => {
        console.log(res.data)
        dispatch({type: FETCH_SMURFS_SUCCESS, payload: res.data})
    })
    .catch(err => {
        console.log('An error occured!', err.message)
        dispatch({type: FETCH_SMURFS_ERROR, payload: 'An error occured! ' + err.message})
    })
} 

export const POST_SMURF_SUCCESS = 'POST_SMURF_SUCCESS';
export const POST_SMURF_ERROR = 'POST_SMURF_ERROR';

export const postSmurf = (data) => dispatch => {
    axios.post("http://localhost:3333/smurfs", data)
    .then(res => {
        console.log(res.data)
        dispatch({type: POST_SMURF_SUCCESS, payload: res.data})
    })
    .catch(err => {
        console.log(err.message)
        dispatch({type: POST_SMURF_ERROR, payload: 'Sorry, there was an error adding the smurf :-( ' + err.message})
    })
}