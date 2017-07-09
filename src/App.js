import React, {Component} from 'react';
import './App.css';
import HomePage from '../src/container/HomePage';
import ProductIndexPage from '../src/container/product/ProductIndexPage';
import TeamWorkPage from '../src/container/TeamWorkPage';
import {connect} from 'react-redux';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'


class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/product" component={ProductIndexPage}/>
                    <Route exact path="/teamwork" component={TeamWorkPage}/>
                </div>
            </Router>
        );
    }


}

const mapStateToProps = (state) => {
    const {login} = state;
    return {
        login,
    }
}
export default connect(mapStateToProps)(App)
