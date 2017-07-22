import React, {Component} from 'react';
import {Carousel, WingBlank, Flex, WhiteSpace, Icon} from 'antd-mobile';
import constant from '../../constant/constant';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import ProductLink from '../../component/ProductLink'
const FlexItem = Flex.Item;

class BootstrapPage extends Component {
    render() {
        return (
            <div>
                <WhiteSpace size="lg"/>
                <div style={{width: "100%", textAlign: "center", color: "#bbb"}}>微信公众号</div>
                <hr/>
                <div>
                    <WhiteSpace size="lg"/>
                    <WingBlank size="lg">
                        <Flex>
                            <FlexItem style={{margin:'20px 10px'}}>
                                <img width="100%"src={constant.QINIU+'fuwuhao.png'}/>
                                <p>欢迎关注我们的公众号</p>
  
                            </FlexItem>
                        </Flex>
                        <Flex>
                            <FlexItem style={{margin:'20px 10px'}}>
                                <img width="100%" src={constant.QINIU+'WechatIMG30.jpeg'}/>
                            </FlexItem>
                        </Flex>
                        <Flex style={{textAlign:'right'}}>
                            <FlexItem style={{margin:'20px 10px'}}>
                                {ProductLink('gongzhonghao')}
                            </FlexItem>
                        </Flex>
                    </WingBlank>
                </div>
            </div>
        );
    }

}


export default BootstrapPage