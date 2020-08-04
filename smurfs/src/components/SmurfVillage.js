import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { getSmurfs } from '../actions/actions'

import AddASmurf from './AddASmurf'

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
    const { getSmurfs } = props;
    const [formShow, setFormShow] = useState(false)

    useEffect(() => {
        getSmurfs()
    }, [])
    
    return (
        <div>
            {props.smurfData.length > 0 ? props.smurfData.map(smurf => {
                return (<SmurfCard smurf={smurf} key={smurf.id}/>)
            }) : <p style={{color: 'red'}}>There is no data to display</p>}
            {props.error.length > 0 ? <p style={{color: 'red'}}>{props.error}</p> : null}
            <button onClick={() => setFormShow(!formShow)}>Add A Smurf!</button>
            {formShow ? <AddASmurf setFormShow={setFormShow} /> : <></>}
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