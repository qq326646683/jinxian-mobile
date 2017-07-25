import React, {Component} from 'react';
import {Carousel, WingBlank, Flex, WhiteSpace, Icon} from 'antd-mobile';
import constant from '../constant/constant';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class TeamWorkPage extends Component {
    render() {
        return (
            <div style={{backgroundColor:'white'}}>
                <WhiteSpace size="lg"/>
                <div style={{width: "100%", textAlign: "center", color: "#bbb"}}>合作</div>
                <hr/>
                <div style={{padding: 10}}>
                    <div style={{fontSize: 25, color: "black",}}>1.详细需求</div>
                    <img style={{marginTop:20}} width="100%"  src={constant.QINIU+"teamwork_step1.jpg"}/>
                    <div style={{fontSize: 18, color: "black",marginTop:20,paddingLeft:20}}>
                        1.客户提供开发的大概需求；<p/>
                        2.我公司派人上门演示相关软件，了解需求；<p/>
                        3.客户提供相关资料（如：图像效果，文字说明等）；<p/>
                        4.我公司具体分析客户提出的全部需求（包括：软硬件需求）；<p/>
                        5.根据客户要求，编写《软件开发项目方案》；<p/>
                        6.评估工作量，编写《软件开发功能清单和报价单》文档；<p/>
                    </div>

                    <div style={{fontSize: 25, color: "black",marginTop:40}}>2.需求沟通</div>
                    <img style={{marginTop:20}} width="100%"  src={constant.QINIU+"teamwork_step2.jpg"}/>
                    <div style={{fontSize: 18, color: "black",marginTop:20,paddingLeft:20}}>
                        1.双方就项目内容进行协商，修改补充，以达成共识；<p/>
                        2.我公司派人上门演示相关软件，了解需求；<p/>
                        3.我方确定《软件开发功能清单和报价单》并提交给客户；<p/>
                    </div>

                    <div style={{fontSize: 25, color: "black",marginTop:40}}>3.合同签订</div>
                    <img style={{marginTop:20}} width="100%"  src={constant.QINIU+"teamwork_step3.jpg"}/>
                    <div style={{fontSize: 18, color: "black",marginTop:20,paddingLeft:20}}>
                        1.双方签署开发合同，合同包括：<p/>
                            附件1：《软件开发解决方案》；<p/>
                            附件2：《功能清单和报价单》；<p/>
                        2.客户支付项目启动款项；<p/>
                        3.我公司组织软件开发人员提交开发计划；<p/>
                    </div>

                    <div style={{fontSize: 25, color: "black",marginTop:40}}>4.开发及测试</div>
                    <img style={{marginTop:20}} width="100%"  src={constant.QINIU+"teamwork_step5.jpg"}/>
                    <div style={{fontSize: 18, color: "black",marginTop:20,paddingLeft:20,marginBottom:60}}>
                        1.我公司依据客户确认的《软件需求规格说明书》和《软件开发界面原型设计》，启动项目开发；<p/>
                        2.更具实际情况，可安排部分模块上线实施；<p/>
                        3.在开发过程中，双方共同检查已完成的功能，及时纠正软件开发过程中的偏差；<p/>
                        4.客户有限的需求，不在合同范围之内，可按新需求返回第3步处理；<p/>
                        5.客户确认后，支付软件开发阶段款。<p/>
                    </div>
                </div>
            </div>
        );
    }

}

export default TeamWorkPage