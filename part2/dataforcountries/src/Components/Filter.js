import React from 'react'

const Filter = (props) => {
    return (
        <div>
            filter shown with<input value={props.inputValue} onChange={props.inputOnChange} />
        </div>
    )
}

export default Filter
