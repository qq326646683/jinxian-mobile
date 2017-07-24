import React, {Component} from 'react';
import {Carousel, Tag, Button, WingBlank, Flex, WhiteSpace, Icon} from 'antd-mobile';
import constant from '../../constant/constant';
import './AnBootstrap.css';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class AnBootstrapPage2 extends Component {
    render() {
        return (
            <div style={{backgroundColor: 'white'}}>
                <WhiteSpace size="lg"/>
                <div style={{width: "100%", textAlign: "center", color: "#bbb"}}>响应式案例2</div>
                <hr/>
                <div style={{padding: 10}}>
                    <div style={{fontSize: 30, color: "black",}}>项目介绍</div>
                    <br/>
                    <div style={{fontSize: 18, color: "black",}}>科技公司网站模板|科技企业网站,瑾贤专业为您提供科技企业响应式网站模板整体效果查看，以及科技企业响应式网站模板的在线演示，源码下载，后台管理，及个性化定制服务。白色：白是全部可见光均匀混合而成的，称为全色光，黑色即无光，是无色的色。
                        整个模板以白色和黑色的极简搭配组合，光感最强，极度简洁分明，又以淡淡的一抹绿色作为点缀，让您的网站充满设计感和科技感。以及充满艺术感的字体，并且网站还支持多种字体切换（微软正黑体，微软雅黑，宋体，黑体，楷体）。
                    </div>
                    <br/>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <div style={{fontSize: 25, color: "black",}}>标签</div>
                        <Tag style={{marginLeft: 10}} selected>科技企业</Tag>
                        <Tag style={{marginLeft: 10}} selected>源码下载</Tag>
                        <Tag style={{marginLeft: 10}} selected>多种字体</Tag>
                    </div>
                    <br/>
                    <div style={{fontSize: 30, color: "black",}} className="detail">详细信息</div>
                    <br/>
                    <img width="100%" src={constant.QINIU + "boots2.jpg"}/>
                    <br/>
                    <br/>
                    <div style={{display: 'flex', width: '100%', justifyContent: 'space-between'}}>
                        <Link to='/anli-bootstrap1'>
                            <div>
                                &lt;&lt;上一篇
                            </div>
                        </Link>
                        <Link to='/anli-bootstrap3'>
                            <div>
                                >>下一篇
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

export default AnBootstrapPage2;