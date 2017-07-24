import React, {Component} from 'react';
import {Carousel, Tag, Button, WingBlank, Flex, WhiteSpace, Icon} from 'antd-mobile';
import constant from '../../constant/constant';
import './AnBootstrap.css';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class AnBootstrapPage3 extends Component {
    render() {
        return (
            <div style={{backgroundColor: 'white'}}>
                <WhiteSpace size="lg"/>
                <div style={{width: "100%", textAlign: "center", color: "#bbb"}}>响应式案例3</div>
                <hr/>
                <div style={{padding: 10}}>
                    <div style={{fontSize: 30, color: "black",}}>项目介绍</div>
                    <br/>
                    <div style={{fontSize: 18, color: "black",}}>日用品销售公司响应式网站,清新质朴的 banner 带来舒适的美好体验。
                        风格更多变，由你做主，您还可以添加文字描述。 移动端加载更小的轮播图片，完全不用担心速度和流量。
                        支持固定在页面顶部，随时切换至其他栏目，更贴心便捷的操作体验。 导航栏目间距可以微调，细致入微的功能。 支持下拉菜单（三级栏目），可以设置鼠标经过或点击展开菜单。
                        可以禁止指定栏目的下拉菜单，超个性化设置。
                        美好的产品，让我们慢慢的欣赏吧。 图片采用延迟加载，再多图片也不怕影响页面速度。 当前区块可选择隐藏。左文右图，清晰明了，调用栏目可选择。 简洁明了的展示公司及行业资讯动态。
                        当前区块可选择隐藏。
                    </div>
                    <br/>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <div style={{fontSize: 25, color: "black",}}>标签</div>
                        <Tag style={{marginLeft: 10}} selected>日用品</Tag>
                        <Tag style={{marginLeft: 10}} selected>清新质朴</Tag>
                        <Tag style={{marginLeft: 10}} selected>风格多变</Tag>
                    </div>
                    <br/>
                    <div style={{fontSize: 30, color: "black",}} className="detail">详细信息</div>
                    <br/>
                    <img width="100%" src={constant.QINIU + "boots3.png"}/>
                    <br/>
                    <br/>
                    <div style={{display: 'flex', width: '100%', justifyContent: 'space-between'}}>
                        <Link to='/anli-bootstrap2'>
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

export default AnBootstrapPage3;