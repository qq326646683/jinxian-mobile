import React, {Component} from 'react';
import {Carousel, Tag, Button, WingBlank, Flex, WhiteSpace, Icon} from 'antd-mobile';
import constant from '../../constant/constant';
import './AnBootstrap.css';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class AnBootstrapPage1 extends Component {
    render() {
        return (
            <div style={{backgroundColor: 'white'}}>
                <WhiteSpace size="lg"/>
                <div style={{width: "100%", textAlign: "center", color: "#bbb"}}>响应式案例1</div>
                <hr/>
                <div style={{padding: 10}}>
                    <div style={{fontSize: 30, color: "black",}}>项目介绍</div>
                    <br/>
                    <div style={{fontSize: 18, color: "black",}}>
                        家居公司，室内设计公司,室内设计有限公司是中国建筑装饰协会会员单位，揭阳市建筑装饰行业协会家装委员会副主任单位，是首批取得广州家庭装饰装修企业资格证的单位之一。“做品味装饰，创名牌企业”，正以饱满的热情和自信一路前行！
                        黑白颜色的搭配使整个网站显得十分高端儒雅，整体风格简洁大气，以红色作为点缀让画面显得醒目，首页还特别设计了一个视频模块，更加有效的展示公司文化
                    </div>
                    <br/>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <div style={{fontSize: 25, color: "black",}}>标签</div>
                        <Tag style={{marginLeft: 10}} selected>高端儒雅</Tag>
                        <Tag style={{marginLeft: 10}} selected>红色点缀</Tag>
                        <Tag style={{marginLeft: 10}} selected>视频展示</Tag>
                        <Tag style={{marginLeft: 10}} selected>文化</Tag>
                    </div>
                    <br/>
                    <div style={{fontSize: 30, color: "black",}} className="detail">详细信息</div>
                    <br/>
                    <img width="100%" src={constant.QINIU + "boots1.jpg"}/>
                    <br/>
                    <br/>
                    <Link to="/anli-bootstrap2">
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

export default AnBootstrapPage1;