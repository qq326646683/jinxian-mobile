import React, {Component} from 'react';
import {isEmptyObject} from '../util/CommonUtil';
import {WingBlank, Carousel, Flex, WhiteSpace, Icon} from 'antd-mobile';
import {getHomeAds} from '../actions/home';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import constant from '../constant/constant'
//#3AC3C4

class HomePage extends Component {
    state = {
        initialHeight: 200,
    }

    componentWillMount() {
        const {dispatch} = this.props;
        dispatch(getHomeAds({where: JSON.stringify({"area": "ads"})}));
    }


    render() {
        return (
            <div style={{backgroundColor: "#eee"}}>
                {this.renderHead()}
                <WhiteSpace size="lg"/>
                <WingBlank size="md">
                    <Flex>
                        <Flex.Item>
                            <Link to="/product">
                                <img width="100%" height="100%"
                                     src={constant.QINIU + 'home_product.png'}/>
                            </Link>
                        </Flex.Item>

                        <Flex.Item>
                            <Flex>
                                <Flex.Item>
                                    <Link to="/askprice">
                                        <img width="100%" height="100%"
                                             src={constant.QINIU + 'home_price.png'}/>
                                    </Link>
                                </Flex.Item>
                                <Flex.Item>
                                    <Link to="/teamwork">
                                        <img width="100%" height="100%"
                                             src={constant.QINIU + 'home_hezuo.png'}/>
                                    </Link>

                                </Flex.Item>
                            </Flex>
                            <Flex>
                                <Flex.Item>
                                    <Link to='/introduce'>
                                        <img width="100%" height="100%"
                                             src={constant.QINIU + 'home_jieshao.png'}/>
                                    </Link>
                                </Flex.Item>

                                <Flex.Item>
                                    <Link to="/aboutus">
                                        <img width="100%" height="100%"
                                             src={constant.QINIU + 'home_us.png'}/>
                                    </Link>
                                </Flex.Item>
                            </Flex>
                        </Flex.Item>
                    </Flex>
                    <WhiteSpace size="md"/>
                    <Link to='/anli'>
                        <img width="100%" height="100%"
                             src={constant.QINIU + 'home_anli.png'}/>
                    </Link>
                </WingBlank>
                {this.renderFooter()}
            </div>
        );
    }


    renderHead = () => {
        const {homeAds} = this.props;
        return (
            <div>
                {
                    !isEmptyObject(homeAds) &&
                    <Carousel
                        className="my-carousel"
                        autoplay={true}
                        infinite
                        selectedIndex={1}
                        swipeSpeed={35}
                    >
                        {homeAds.results.map((item, i) => {
                            return (
                                <img
                                    key={i}
                                    width="100%"
                                    height={window.width * 3 / 5}
                                    alt="icon"
                                    src={constant.QINIU + item.imgurl}
                                    onLoad={() => {
                                        // fire window resize event to change height
                                        window.dispatchEvent(new Event('resize'));
                                        this.setState({
                                            initialHeight: null,
                                        });
                                    }}
                                />
                            )
                        })
                        }
                    </Carousel>
                }
            </div>

        );
    }

    renderFooter = () => {
        return (
            <div>

            </div>
        );
    }

}


const mapStateToProps = (state) => {
    const {home} = state;
    return {
        homeAds: home.homeAds,
    }
}
export default connect(mapStateToProps)(HomePage)
