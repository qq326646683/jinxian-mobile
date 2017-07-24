import React, {Component} from 'react';
import {Carousel, WingBlank, Flex, WhiteSpace, Icon} from 'antd-mobile';
import constant from '../../constant/constant';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class AnH5Page extends Component {
    render() {
        return (
            <div style={{backgroundColor: 'white'}}>
                <WhiteSpace size="lg"/>
                <div style={{width: "100%", textAlign: "center", color: "#bbb"}}>H5广告案例</div>
                <hr/>
                <div style={{padding: 10}}>
                    <div style={{fontSize: 18, color: "black",}}>1. 《生命之上，想象之下》   腾讯UP大会宣传广告</div>
                    <img style={{marginTop: 20}} width="100%" src={constant.QINIU + "20150705142800_66002.png"}/>
                    <div style={{fontSize: 18, color: "black",}}>起初，我是被模仿埃舍尔画面的封面吸引的，虽然这支H5整体画面没有能够传承埃舍尔的绘画精髓，但是他还是打破了传统幻灯片式的呈现方式，塑造出了一种宽广、素雅、幽静的整体感受，而在互动方面有些略显单一了…</div>

                    <br/>
                    <div style={{fontSize: 18, color: "black",}}>2. 《梦想童年》 \ 《你的创意还活着么？》 微信游戏推送</div>
                    <img style={{marginTop: 20}} width="100%" src={constant.QINIU + "20150705143336_88801.png"}/>
                    <div style={{fontSize: 18, color: "black",}}>这是两支风格极为类似，格调走心的H5,（看管要搭配音乐观看呀～）它让我直接联想到了2013年腾讯qq的年中贺岁广告大片《弹指间 心无间》系列，  简单而到位…
                        我突然会有这样的感触：试着把这些喜欢的H5放进收藏夹，在睡前细细品味，他就像是我们小时候，妈妈讲的睡前故事…我们是躲在钢筋混泥土背后那一群群在衣衫里的寂寞高手，我们每个人的信念依然需要童话，不管你已是为人父母还是年事已高…而这些走心的H5广告也许就是我们这些当代都市人的美丽童话！</div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </div>
            </div>
        )
    }
}

export default AnH5Page;