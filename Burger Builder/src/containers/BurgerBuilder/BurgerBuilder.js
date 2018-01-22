import React, {Component} from 'react';
import Aux from '../../hoc/Auxs/Auxs';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-order';
import withError from '../../hoc/withError/withError';
import Spinner from '../../components/UI/Spinner/Spinner';

const INGREDIENT_PRICES = {
    lettuce: 0.5,
    cheese: 0.4,
    bacon: 0.7,
    meat: 1.3
}

class BurgerBuilder extends Component {
    state = {
        ingredients: null,
        totalPrice: 3,
        purchasable: false,
        checkedout: false,
        loading: false,
        error: false
    }
    
    componentDidMount(){
        axios.get('https://react-builder-burger.firebaseio.com/ingredients.json')
                .then(response=>{
                    this.setState({ingredients: response.data});
        }).catch(error => this.setState({error: true}));
    }
    
    updatePurchase(ingredients) {
       const sum = Object.keys(ingredients)
               .map(igKey =>{
                   return ingredients[igKey]
                })
                .reduce((sum,el) => {
                    return sum + el;
                },0);
            this.setState({purchasable: sum >0});
    }
    
    addIngredient = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount+1;
        const updatedIngredients = {
                    ...this.state.ingredients  
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchase(updatedIngredients);
    }
    
    removeIngredient = (type) => {
        const oldCount = this.state.ingredients[type];
        if(oldCount <=0){
            return;
        }
        const updatedCount = oldCount-1;
        const updatedIngredients = {
                    ...this.state.ingredients  
        };
        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchase(updatedIngredients);
    }
    
    checkout = () => {
        this.setState({checkedout: true});
    }
    
    cancelCheckout = () => {
        this.setState({checkedout: false});
    }
    
    continueCheckout = () => {
        this.setState({loading: true});
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: 'Manido Wilkie',
                address: {
                    street: '123 Fake Stree',
                    zipCode: '12345',
                    country: 'Springfield'
                },
                email: 'test@mail.com'
            },
            deliveryMethod: 'fastest'
        }
        axios.post('/orders.json', order)
                .then(response=> {
                    this.setState({loading: false, checkedout: false});
        })
                .catch(error =>{ 
                    this.setState({loading: false, checkedout: false});
        });
    }
    render(){
        const disabledInfo = {
                    ...this.state.ingredients
        };
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <=0;
        }
        let orderSummary = null;
        
        let burger = this.state.error ? 
        <p>Ingredients can't be loaded</p> : <Spinner />;
        
       if(this.state.ingredients){
            burger = (
                <Aux>
                 <Burger ingredients={this.state.ingredients} />
                    <BuildControls
                        ingredientAdded={this.addIngredient}
                        ingredientRemoved={this.removeIngredient}
                        disabled={disabledInfo}
                        purchasable={this.state.purchasable}
                        ordered={this.checkout}
                        price={this.state.totalPrice}
                    />
                </Aux>
                );
         orderSummary = <OrderSummary 
                        ingredients={this.state.ingredients}
                        price={this.state.totalPrice}
                        orderCancelled={this.cancelCheckout}
                        orderContinued={this.continueCheckout}
                        />;
       }
       if(this.state.loading){
            orderSummary = <Spinner />;
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

export default withError(BurgerBuilder, axios);