import React, {Component} from 'react';
import {Carousel, WingBlank, Flex, WhiteSpace, Icon} from 'antd-mobile';
import constant from '../../constant/constant';
import {Link} from 'react-router-dom';
import ProductLink from '../../component/ProductLink';
const FlexItem = Flex.Item;

class BootstrapPage extends Component {
    render() {
        return (
            <div>
                <WhiteSpace size="lg"/>
                <div style={{width: "100%", textAlign: "center", color: "#bbb"}}>响应式网站</div>
                <hr/>
                <div>
                    <WhiteSpace size="lg"/>
                    <WingBlank size="lg">
                        <Flex>
                            <FlexItem style={{margin: '20px 10px'}}>
                                <img width="100%" src={constant.QINIU + 'devices.png'}/>
                                <h2 style={{textAlign: 'center'}}>一个框架、多种设备</h2>
                                <p>你的网站和应用能在 Bootstrap 的帮助下通过同一份代码快速、有效适配手机、平板、PC 设备，这一切都是 CSS 媒体查询（Media Query）的功劳。</p>

                            </FlexItem>
                        </Flex>
                        <Flex>
                            <FlexItem style={{margin: '20px 10px'}}>
                                <img width="100%" src={constant.QINIU + 'components.png'}/>
                                <h2 style={{textAlign: 'center'}}>特性齐全</h2>
                                <p>Bootstrap 提供了全面、美观的文档。你能在这里找到关于 HTML 元素、HTML 和 CSS 组件、jQuery 插件方面的所有详细文档。</p>
                            </FlexItem>
                        </Flex>
                        <Flex style={{textAlign: 'right'}}>
                            <FlexItem style={{margin: '20px 10px'}}>
                                {ProductLink('bootstrap1')}
                            </FlexItem>
                        </Flex>
                    </WingBlank>
                </div>
            </div>
        );
    }

}


export default BootstrapPage