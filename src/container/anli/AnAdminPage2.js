import React, {Component} from 'react';
import {Carousel, Tag, Button, WingBlank, Flex, WhiteSpace, Icon} from 'antd-mobile';
import constant from '../../constant/constant';
import './AnBootstrap.css';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class AnAdminPage2 extends Component {
    render() {
        return (
            <div style={{backgroundColor: 'white'}}>
                <WhiteSpace size="lg"/>
                <div style={{width: "100%", textAlign: "center", color: "#bbb"}}>后台管理系统案例2</div>
                <hr/>
                <div style={{padding: 10}}>
                    <div style={{fontSize: 30, color: "black",}}>yself的后台管理系统，管理技师、产品、订单、推送：</div>
                    <br/>
                    <br/>
                    <br/>
                    <img width="100%" src={constant.QINIU + "server21.png"}/>
                    <br/>
                    <br/>
                    <img width="100%" src={constant.QINIU + "server22.png"}/>
                    <br/>
                    <br/>
                    <div style={{display: 'flex', width: '100%', justifyContent: 'space-between'}}>
                        <Link to='/anli-admin1'>
                            <div>
                                &lt;&lt;上一篇
                            </div>
                        </Link>

                    </div>
                    <br/>
                    <br/>
                </div>
            </div>
        )
    }
}

export default AnAdminPage2;