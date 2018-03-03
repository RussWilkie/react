import React, { Component } from 'react';
import { connect } from 'react-redux';

import Aux from '../../hoc/Auxs/Auxs';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

import withError from '../../hoc/withError/withError';
import Spinner from '../../components/UI/Spinner/Spinner';
import * as burgerBuilderActions from '../../store/actions/index';
import axios from '../../axios-order';


class BurgerBuilder extends Component {
    state = {
        checkedout: false
    }

    componentDidMount() {
        this.props.onInitIngredients();
    }

    updatePurchase(ingredients) {
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey]
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
        return sum > 0;
    }

    checkout = () => {
        if(this.props.isAuthenticated){
            this.setState({ checkedout: true });
        }else{
            this.props.onSetAuthRedirectPath('/checkout');
            this.props.history.push('/auth');
        }
        
    }

    cancelCheckout = () => {
        this.setState({ checkedout: false });
    }

    continueCheckout = () => {
        this.props.onInitPurchase();
        this.props.history.push('/checkout');

    }
    render() {
        const disabledInfo = {
            ...this.props.ings
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        let orderSummary = null;

        let burger = this.props.error ?
            <p>Ingredients can't be loaded</p> : <Spinner />;

        if (this.props.ings) {
            burger = (
                <Aux>
                    <Burger ingredients={this.props.ings} />
                    <BuildControls
                        ingredientAdded={this.props.onIngredientAdded}
                        ingredientRemoved={this.props.onIngredientRemoved}
                        disabled={disabledInfo}
                        purchasable={this.updatePurchase(this.props.ings)}
                        ordered={this.checkout}
                        isAuth={this.props.isAuthenticated}
                        price={this.props.price}
                    />
                </Aux>
            );
            orderSummary = <OrderSummary
                ingredients={this.props.ings}
                price={this.props.price}
                orderCancelled={this.cancelCheckout}
                orderContinued={this.continueCheckout}
            />;
        }

        return (
            <Aux>
                <Modal
                    show={this.state.checkedout}
                    modalClosed={this.cancelCheckout}>
                    {orderSummary}
                </Modal>
                {burger}
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        error: state.burgerBuilder.error,
        isAuthenticated: state.auth.token !== null
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingName) => dispatch(
            burgerBuilderActions.addIngredient(ingName)
        ),
        onIngredientRemoved: (ingName) => dispatch(
            burgerBuilderActions.removeIngredient(ingName)
        ),
        onInitIngredients: () => dispatch(
            burgerBuilderActions.initIngredients()
        ),
        onInitPurchase: () => dispatch(
            burgerBuilderActions.purchaseInit()
        ),
        onSetAuthRedirectPath: (path) => dispatch(burgerBuilderActions.setAuthRedirectPath(path))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(withError(BurgerBuilder, axios));