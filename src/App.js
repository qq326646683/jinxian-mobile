import React, {Component} from 'react';
import './App.css';
import HomePage from '../src/container/HomePage';
import ProductIndexPage from '../src/container/product/ProductIndexPage';
import H5Page from '../src/container/product/H5Page';
import BootstrapPage from '../src/container/product/BootstrapPage';
import AppPage from '../src/container/product/AppPage';
import AdminMenagePage from '../src/container/product/AdminMenagePage';
import WeChatgzhPage from '../src/container/product/WeChatgzhPage';
import WeChatxcxPage from '../src/container/product/WeChatxcxPage';
import TeamWorkPage from '../src/container/TeamWorkPage';
import AskPricePage from '../src/container/AskPricePage';
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
                    <Route exact path="/product-h5" component={H5Page}/>
                    <Route exact path="/product-bootstrap" component={BootstrapPage}/>
                    <Route exact path="/product-app" component={AppPage}/>
                    <Route exact path="/product-admin" component={AdminMenagePage}/>
                    <Route exact path="/product-wechatgzh" component={WeChatgzhPage}/>
                    <Route exact path="/product-wechatxcx" component={WeChatxcxPage}/>
                    <Route exact path="/teamwork" component={TeamWorkPage}/>
                    <Route exact path="/askprice" component={AskPricePage}/>
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
