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
import IntroducePage from '../src/container/IntroducePage';
import Aboutus from '../src/container/AboutusPage';
import AnliIndexPage from '../src/container/anli/AnliIndexPage';
import AnH5Page from '../src/container/anli/AnH5Page';
import AnBootstrapPage1 from './container/anli/AnBootstrapPage1';
import AnBootstrapPage2 from './container/anli/AnBootstrapPage2';
import AnBootstrapPage3 from './container/anli/AnBootstrapPage3';
import AnAppPage from './container/anli/AnAppPage';
import AnAdminPage1 from './container/anli/AnAdminPage1';
import AnAdminPage2 from './container/anli/AnAdminPage2';
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
                    <Route exact path="/introduce" component={IntroducePage}/>
                    <Route exact path="/aboutus" component={Aboutus}/>
                    <Route exact path="/anli" component={AnliIndexPage}/>
                    <Route exact path="/anli-h5" component={AnH5Page}/>
                    <Route exact path="/anli-bootstrap1" component={AnBootstrapPage1}/>
                    <Route exact path="/anli-bootstrap2" component={AnBootstrapPage2}/>
                    <Route exact path="/anli-bootstrap3" component={AnBootstrapPage3}/>
                    <Route exact path="/anli-app" component={AnAppPage}/>
                    <Route exact path="/anli-admin1" component={AnAdminPage1}/>
                    <Route exact path="/anli-admin2" component={AnAdminPage2}/>
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
