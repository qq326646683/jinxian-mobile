import React, {Component} from 'react';
import {Carousel, Tag, Button, WingBlank, Flex, WhiteSpace, Icon} from 'antd-mobile';
import constant from '../../constant/constant';
import './AnBootstrap.css';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class AnAdminPage1 extends Component {
    render() {
        return (
            <div style={{backgroundColor: 'white'}}>
                <WhiteSpace size="lg"/>
                <div style={{width: "100%", textAlign: "center", color: "#bbb"}}>后台管理系统案例1</div>
                <hr/>
                <div style={{padding: 10}}>
                    <div style={{fontSize: 30, color: "black",}}>这是基于antd设计模式做的响应式后台</div>
                    <br/>
                    <br/>
                    <br/>
                    <div style={{fontSize: 30, color: "black",}}>pc端预览效果：</div>
                    <img width="100%" src={constant.QINIU + "server11.png"}/>
                    <br/>
                    <br/>
                    <br/>
                    <div style={{fontSize: 30, color: "black",}}>手机端预览效果：</div>
                    <img width="100%" src={constant.QINIU + "server12.png"}/>
                    <br/>
                    <br/>
                    <Link to="/anli-admin2">
                        <div style={{width: '100%', textAlign: 'right'}}>
                            >>下一篇
                        </div>
                    </Link>
                    <br/>
                    <br/>
                </div>
            </div>
        )
    }
}

export default AnAdminPage1;