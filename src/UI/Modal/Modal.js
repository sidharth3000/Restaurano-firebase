import React from 'react';

import './Modal.css';

const modal = (props) => (

    <div className="modal">
        {props.children}
    </div>
)

export default modal;