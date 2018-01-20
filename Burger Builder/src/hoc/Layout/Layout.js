import React, {Component} from 'react';
import Aux from '..//Auxs/Auxs';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state ={
        showSideDrawer: false
    }
    
    sideDrawerClosed =() =>{
        this.setState({showSideDrawer: false});
    }
    
    sideDrawerToggle = () => {
        this.setState((prevState)=>{
        return {showSideDrawer: !prevState.showSideDrawer};
        });
    }
    
    render() {
        return(
        <Aux>
            <Toolbar drawerToggleClicked={this.sideDrawerToggle}/>
            <SideDrawer 
                open={this.state.showSideDrawer}
                closed={this.sideDrawerClosed}/>
            <div>Toolbar, Sidedrawer, Backdrop</div>
            <main className={classes.Content}>
                {this.props.children}
            </main>
        </Aux>
        )
    }
}


export default Layout;