import React, {Component} from 'react';
import {Carousel, Tag, Button, WingBlank, Flex, WhiteSpace, Icon} from 'antd-mobile';
import constant from '../../constant/constant';
import './AnBootstrap.css';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';


class AnVrPage extends Component {
    render() {
        return (
            <div style={{backgroundColor: 'white'}}>
                <WhiteSpace size="lg"/>
                <div style={{width: "100%", textAlign: "center", color: "#bbb"}}>vr案例</div>
                <hr/>
                <div style={{padding: 10}}>
                    <iframe style={{width: '100%', height: 500}} src="./test.html"/>
                </div>
            </div>
        )
    }
}

export default AnVrPage;