import React from 'react';

import Legio from '../../../hoc/Legio';
import Button from '../../UI/Button/Button'

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{ textTransform: 'capitalize'}}>{igKey}</span>: { props.ingredients[igKey] }
                </li >
                );
        } );
return (
    <Legio>
        <h3>Your Order</h3>
        <p>A delicious burger with followind ingredients:</p>
        <ul>
            {ingredientSummary}
        </ul>
        <p>Continue to Cheokout?</p>
        <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
        <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
    </Legio>
);
};

export default orderSummary;