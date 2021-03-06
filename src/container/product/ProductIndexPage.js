import React, {Component} from 'react';
import {Carousel, WingBlank, Flex, WhiteSpace, Icon} from 'antd-mobile';
import constant from '../../constant/constant';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class ProductIndexPage extends Component {
    render() {
        return (
            <div>
                <WhiteSpace size="lg"/>
                <div style={{width: "100%", textAlign: "center", color: "#bbb"}}>案例</div>
                <hr/>
                <div>
                    <WhiteSpace size="lg"/>
                    <WingBlank size="md">
                        <Flex>
                            <Flex.Item>
                                <Flex>
                                    <Flex.Item>
                                        {this.ProductItem("product_h5.png", "h5广告页制作", '/product-h5')}
                                    </Flex.Item>
                                    <Flex.Item>
                                        {this.ProductItem("product_xiangyin.png", "响应式网站", '/product-bootstrap')}
                                    </Flex.Item>
                                    <Flex.Item>
                                        {this.ProductItem("product_app.png", "手机app", '/product-app')}
                                    </Flex.Item>
                                </Flex>
                                <Flex>
                                    <Flex.Item>
                                        {this.ProductItem("product_wechat.png", "微信公众号", '/product-wechatgzh')}
                                    </Flex.Item>
                                    <Flex.Item>
                                        {this.ProductItem("product_xcx.png", "小程序", '/product-wechatxcx')}
                                    </Flex.Item>
                                    <Flex.Item>
                                        {this.ProductItem("product_houtai.png", "后台管理", '/product-admin')}
                                    </Flex.Item>
                                </Flex>

                            </Flex.Item>
                        </Flex>
                    </WingBlank>
                </div>
            </div>
        );
    }

    ProductItem = (img, text, to) => {
        return (
            <Link to={to}>
                <div style={{width: "100%", height: "100%", textAlign: "center", padding: 10}}>
                    <img width="50%" height="50%" src={constant.QINIU + img}/>
                    <div style={{fontSize: 20, color: "black", marginTop: 5}}>{text}</div>
                </div>
            </Link>
        );
    }
}


export default ProductIndexPage