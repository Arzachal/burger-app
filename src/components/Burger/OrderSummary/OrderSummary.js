import React, { Component } from 'react';

import Legio from '../../../hoc/Legio/Legio';
import Button from '../../UI/Button/Button'

class OrderSummary extends Component {
    // This could be a functional component, doesn't have top be a class
    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return (
                    <li key={igKey}>
                        <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {this.props.ingredients[igKey]}
                    </li >
                );
            });
        return (
            <Legio>
                <h3>Your Order</h3>
                <p>A delicious burger with followind ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Cheokout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Legio>
        );
    }
}

export default OrderSummary;