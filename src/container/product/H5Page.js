import React, {Component} from 'react';
import {Carousel, WingBlank, Flex, WhiteSpace, Icon} from 'antd-mobile';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import ProductLink from '../../component/ProductLink'
import './H5Page.css';
const FlexItem = Flex.Item;

class H5Page extends Component {
    render() {
        return (
            <div>
                <WhiteSpace size="lg"/>
                <div style={{width: "100%", textAlign: "center", color: "#bbb"}}>H5广告页</div>
                <hr/>
                <div>
                    <WhiteSpace size="lg"/>
                    <WingBlank size="lg">
                        <Flex>
                            <FlexItem style={{margin:'20px 10px'}}>
                                <div className="title">简介</div>
                                <p>目前关于移动端H5页面的叫法很多，也会称为“翻翻看”、手机微杂志、手机上的PPT/Keynote、广告页、场景应用或海报\画报（动态海报、指尖海报、掌中海报、动画海报、微画报、微海报）。最为的交互形式为滑动翻页（通常是上划），因为滑动的操作非常简单，在手机上也非常方便，每个页面的都不太多，但同时能保证让受众更多的参与其中，故有时会适当加入点击、滑动、长按等操作。</p>
                            </FlexItem>
                        </Flex>
                        <Flex>
                            <FlexItem style={{margin:'20px 10px'}}>
                                <div className="title">应用场景</div>
                                <p className='content'>如峰会邀请函、电视电影或新品发布海报（如联通首发iPhone6），生活旅行图志、偶像画报、微杂志、生日贺卡、周年纪念册、喜帖，还有些有心人则用它在朋友圈展示自己的产品（支持外部链接），或做成微信公号欢迎页、艺术家作品集、团队招聘页等</p>

                            </FlexItem>
                        </Flex>
                        <Flex style={{textAlign:'right'}}>
                            <FlexItem style={{margin:'20px 10px'}}>
                                {ProductLink('h5')}
                            </FlexItem>
                        </Flex>
                    </WingBlank>
                </div>
            </div>
        );
    }

}


export default H5Page