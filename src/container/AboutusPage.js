import React, {Component} from 'react';
import {Carousel, WingBlank, Flex, WhiteSpace, Table, Icon} from 'antd-mobile';
import constant from '../constant/constant';
import {intro} from '../actions/introduce';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';


class AboutusPage extends Component {

    render() {
        return (
            <div style={{backgroundColor: 'white'}}>
                <WhiteSpace size="lg"/>
                <div style={{width: "100%", textAlign: "center", color: "#bbb"}}>关于我们</div>
                <hr/>
                <br/>
                <div style={{padding: 10, textAlign: 'center'}}>
                    <div>
                        <img width="30%" src={constant.QINIU + "favicon.png"}/>
                    </div>
                    <WingBlank size="lg">
                        <div style={{fontSize: 30}}>
                            瑾贤网络是一家由资深互联网人才组成创立的公司，创业以来，一直专注于互联网、移动互联网的产品创新与技术专研，从产品规划、用户体验到最终的技术实现与产品运营，可以满足客户在产品早、中时期的要求，可以在相同的成本支出的情况下，以专业人员，用视如己出的态度，实施最优化的方案。
                        </div>
                    </WingBlank>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <div style={{padding:20}}>
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            <img width="3%" src={constant.QINIU + "point.png"}/>
                            <div width='100px' style={{marginLeft:10,fontSize:25}}>我们pc官网：www.jinxianyun.com</div>
                        </div>
                        <div style={{display: 'flex', alignItems: 'center',marginTop:10}}>
                            <img width="3%" src={constant.QINIU + "point.png"}/>
                            <div width='100px' style={{marginLeft:10,fontSize:25}}>我们手机官网：m.jinxianyun.com</div>
                        </div>
                        <div style={{display: 'flex', alignItems: 'center',marginTop:10}}>
                            <img width="3%" src={constant.QINIU + "point.png"}/>
                            <div width='100px' style={{marginLeft:10,fontSize:25}}>地址：上海市闵行区宝成路500号</div>
                        </div>
                        <div style={{display: 'flex', alignItems: 'center',marginTop:10}}>
                            <img width="3%" src={constant.QINIU + "point.png"}/>
                            <div width='100px' style={{marginLeft:10,fontSize:25}}>商务微信：dashuai0181</div>
                        </div>
                        <div style={{display: 'flex', alignItems: 'center',marginTop:10}}>
                            <img width="3%" src={constant.QINIU + "point.png"}/>
                            <div width='100px' style={{marginLeft:10,fontSize:25}}>商务QQ：326646683</div>
                        </div>
                        <div style={{display: 'flex', alignItems: 'center',marginTop:10}}>
                            <img width="3%" src={constant.QINIU + "point.png"}/>
                            <div width='100px' style={{marginLeft:10,fontSize:25}}>联系方式：17717562686</div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default AboutusPage;