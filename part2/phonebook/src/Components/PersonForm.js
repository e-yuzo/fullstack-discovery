import React from 'react'

const PersonForm = (props) => {
    return (
        <form onSubmit={props.onSubmit}>
            <div>
                name: <input value={props.inputNameValue} onChange={props.inputNameOnChange} />
            </div>
            <div>
                number: <input value={props.inputNumberValue} onChange={props.inputNumberOnChange} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm