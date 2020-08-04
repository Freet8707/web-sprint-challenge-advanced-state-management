import React, { useState } from 'react';
import { connect } from 'react-redux'
import { postSmurf } from '../actions/actions'

const AddASmurf = (props) => {
    const [newSmurf, setNewSmurf] = useState({
        name: '',
        age: 0,
        height: '',
        id: 0
    })

    const handleInput = e => {
        setNewSmurf({
            ...newSmurf,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.postSmurf(newSmurf)
        setNewSmurf({
            name: '',
            age: 0,
            height: '',
            id: 0
        })
        props.setFormShow(false)
    }
    
    return (
        <>
            <form style={{marginBottom: '50px'}} onSubmit={handleSubmit} label='addSmurf'>
                <label htmlFor='name' />
                <input
                    type='text'
                    id='name'
                    name='name'
                    value={newSmurf.name}
                    placeholder="Enter the smurf's name"
                    onChange={handleInput}
                />
                <label htmlFor='age' />
                <input
                    type='text'
                    id='age'
                    name='age'
                    value={newSmurf.age}
                    placeholder='Enter the age of the smurf'
                    onChange={handleInput}
                />
                <label htmlFor='height' />
                <input
                    type='text'
                    id='height'
                    name='height'
                    value={newSmurf.height}
                    placeholder="Enter the smurf's height"
                    onChange={handleInput}
                />
                <button type='submit'>Submit</button>
            </form>
        </>
    )
}

export default connect(() => {}, { postSmurf })(AddASmurf)