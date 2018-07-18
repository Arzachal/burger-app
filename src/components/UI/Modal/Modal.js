import React from 'react';

import classes from './Modal.css';
import Legio from '../../../hoc/Legio';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => (
    <Legio>
        <Backdrop show={props.show} clicked={props.modalClosed}/>
        <div style={{
            transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: props.show ? '1' : '0'
        }}
            className={classes.Modal}>
            {props.children}
        </div>
    </Legio>
);

export default modal;