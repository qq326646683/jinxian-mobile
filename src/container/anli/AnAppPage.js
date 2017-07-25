import React, {Component} from 'react';
import {Carousel, Tag, Button, WingBlank, Flex, WhiteSpace, Icon} from 'antd-mobile';
import constant from '../../constant/constant';
import './AnBootstrap.css';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class AnAppPage extends Component {
    render() {
        return (
            <div style={{backgroundColor: 'white'}}>
                <WhiteSpace size="lg"/>
                <div style={{width: "100%", textAlign: "center", color: "#bbb"}}>手机app案例</div>
                <hr/>
                <div style={{padding: 10}}>
                    <div style={{fontSize: 30, color: "black",}}>1.这是一款给印度尼西亚人开发的美甲美容按摩的O2O平台。客户可以通过线上预约，线下服务到家的，涵盖了聊天，地图，推送，支付等功能。</div>
                    <br/>
                    <img width="100%" src={constant.QINIU + "WechatIMG27.jpeg"}/>
                    <br/>
                    <br/>
                    <img width="100%" src={constant.QINIU + "WechatIMG29.jpeg"}/>
                    <br/>
                    <br/>
                    <img width="100%" src={constant.QINIU + "WechatIMG28.jpeg"}/>
                    <br/>
                    <br/>
                </div>
            </div>
        )
    }
}

export default AnAppPage;