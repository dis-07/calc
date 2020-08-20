import React from 'react'

const Button = ({
    index,
    children, 
    orange,
    onClick,
    value
}) => {
    const handleClick = () => {
        onClick(value)
    }
    return (
        <button className={`action action-${index}${orange ? ' action--orange' : ''}`} onClick={handleClick}>{children}</button>
    )
}

Button.defaultProps = {
    orange: false
}

export default Button