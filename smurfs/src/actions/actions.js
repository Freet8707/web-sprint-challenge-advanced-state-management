import axios from 'axios'

export const FETCH_SMURFS_START = 'FETCH_SMURFS_START';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_ERROR = 'FETCH_SMURFS_ERROR';

export const getSmurfs = () => dispatch => {
    dispatch({type: FETCH_SMURFS_START})
    axios.get("http://localhost:3333/smurfs")
    .then(res => {
        console.log(res.data)
        // dispatch({type: FETCH_SMURFS_SUCCESS})
    })
    .catch(err => {
        console.log('An error occured!', err.message)
        // dispatch({type: FETCH_SMURFS_ERROR})
    })
} 