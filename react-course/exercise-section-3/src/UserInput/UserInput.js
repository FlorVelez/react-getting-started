import React from 'react';
import './UserInput.css';

const userInput = props => {
    return(
        <input
            className="input"
            type="text"
            maxLength="15"
            onChange={ props.usernameChanged }
            value={ props.username } />
    );
}

export default userInput;