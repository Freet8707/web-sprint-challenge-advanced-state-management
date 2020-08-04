import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { getSmurfs } from '../actions/actions'

const SmurfCard = props => {
    return (
        <div>
            <h1>name: {props.smurf.name}</h1>
            <h3>age: {props.smurf.age}</h3>
            <h3>height: {props.smurf.height}</h3>
        </div>
    )
}

const SmurfVillage = (props) => {

    useEffect(() => {
        props.getSmurfs()
    }, [])
    
    return (
        <div>
            {props.smurfData.length > 0 ? props.smurfData.map(smurf => {
                return (<SmurfCard smurf={smurf} key={smurf.id}/>)
            }) : <p style={{color: 'red'}}>There is no data to display</p>}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        smurfData: state.smurfs,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, { getSmurfs })(SmurfVillage)