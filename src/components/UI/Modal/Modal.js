import React, { Component } from 'react';

import classes from './Modal.css';
import Legio from '../../../hoc/Legio/Legio';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show;
    }
    render() {
        return (
            <Legio>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                <div style={{
                    transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: this.props.show ? '1' : '0'
                }}
                    className={classes.Modal}>
                    {this.props.children}
                </div>
            </Legio>
        );
    }
}

export default Modal;