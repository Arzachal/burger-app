import React, { Component } from 'react';

import Legio from '../../hoc/Legio';
import Burger from '../../components/Burger/Burger';


class BurgerBuilder extends Component {
    
    render() {
        return (
            <Legio>
                <Burger />
                <div>Build Controls</div>
            </Legio>
        );
    }
}

export default BurgerBuilder;