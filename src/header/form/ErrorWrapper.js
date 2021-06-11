import React from 'react'

const ErrorWrapper = (props) => {
    return (
        <div className="error">
            {props.children}
        </div>
    )
}

export default ErrorWrapper
