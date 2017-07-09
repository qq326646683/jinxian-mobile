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
                <div style={{width: "100%", textAlign: "center", color: "#bbb"}}>产品</div>
                <hr/>
                <div>
                    <WhiteSpace size="lg"/>
                    <WingBlank size="md">
                        <Flex>
                            <Flex.Item>
                                <Flex>
                                    <Flex.Item>
                                        <Link to="/product">
                                            {this.ProductItem("product_h5.png","h5广告页制作")}
                                        </Link>
                                    </Flex.Item>
                                    <Flex.Item>
                                        <Link to="/product">
                                            {this.ProductItem("product_xiangyin.png","响应式网站")}
                                        </Link>
                                    </Flex.Item>
                                    <Flex.Item>
                                        <Link to="/product">
                                            {this.ProductItem("product_app.png","手机app")}
                                        </Link>
                                    </Flex.Item>
                                </Flex>
                                <Flex>
                                    <Flex.Item>
                                        <Link to="/product">
                                            {this.ProductItem("product_wechat.png","微信公众号")}
                                        </Link>
                                    </Flex.Item>
                                    <Flex.Item>
                                        <Link to="/product">
                                            {this.ProductItem("product_xcx.png","小程序")}
                                        </Link>
                                    </Flex.Item>
                                    <Flex.Item>
                                        <Link to="/product">
                                            {this.ProductItem("product_houtai.png","后台管理")}
                                        </Link>
                                    </Flex.Item>
                                </Flex>

                            </Flex.Item>
                        </Flex>
                    </WingBlank>
                </div>
            </div>
        );
    }

    ProductItem = (img,text) => {
        return (
            <div style={{width: "100%", height: "100%", textAlign: "center",padding:10}}>
                <img width="50%" height="50%" src={constant.QINIU+img}/>
                <div style={{fontSize:16,color:"black",marginTop:5}}>{text}</div>
            </div>
        );
    }
}


export default ProductIndexPage