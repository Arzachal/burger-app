import React from 'react';
import Legio from '../../hoc/Legio';
import classes from './Layout.css';

const layout = (props) => (
    <Legio>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Legio>
);

export default layout;