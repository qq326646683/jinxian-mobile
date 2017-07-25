import React, {Component} from 'react';
import {Carousel, WingBlank, Flex, WhiteSpace, Icon} from 'antd-mobile';
import constant from '../../constant/constant';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import ProductLink from '../../component/ProductLink'
import './adminMenage.css';
const FlexItem = Flex.Item;

class BootstrapPage extends Component {
    render() {
        return (
            <div>
                <WhiteSpace size="lg"/>
                <div style={{width: "100%", textAlign: "center", color: "#bbb"}}>后台管理</div>
                <hr/>
                <div>
                    <WhiteSpace size="lg"/>
                    <WingBlank size="lg">
                        <Flex>
                            <FlexItem style={{margin:'20px 10px'}}>
                                <p>后台管理系统是内容管理系统Content Manage System（简称CMS）的一个子集。CMS是Content Management System的缩写，意为"内容管理系统"。 内容管理系统是企业信息化建设和电子政务的新宠，也是一个相对较新的市场。业界公认的国内比较权威的产品有CmsTop、TurboCMS、TRS。对于内容管理，业界还没有一个统一的定义，不同的机构有不同的理解。</p>
  
                            </FlexItem>
                        </Flex>
                        <Flex>
                            <FlexItem style={{margin:'20px 10px'}}>
                                <img width="100%" src={constant.QINIU+'con1-bg1.png'}/>
                            </FlexItem>
                            <FlexItem style={{margin:'20px 10px'}}>
                                <h4>销售利器：线索及管理</h4>
                                <p>客户360度视图<br/>线索捕获，多次挖掘<br/>有效盘活潜客线索，科学完善客户档案库</p>
                            </FlexItem>
                        </Flex>
                        <Flex>
                            <FlexItem style={{margin:'20px 10px'}}>
                                <h4>销售兵法：商机过程跟进</h4>
                                <p>重点商机 实时提醒<br/>销售行为 全面掌控<br/>团队协作开启成功之路</p>
                            </FlexItem>
                            <FlexItem style={{margin:'20px 10px'}}>
                                <img width="100%" src={constant.QINIU+'con1-bg2.png'}/>
                            </FlexItem>
                        </Flex>
                        <Flex>
                            <FlexItem style={{margin:'20px 10px'}}>
                                <img width="100%" src={constant.QINIU+'con1-bg3.png'}/>
                            </FlexItem>
                            <FlexItem style={{margin:'20px 10px'}}>
                                <h4>执掌天下：销售过程数字化</h4>
                                <p>移动端企业经营一目了然<br/>销售经理行为特点全面剖析<br/>精准预测销售业绩，辅助管理决策</p>
                            </FlexItem>
                        </Flex>
                        <Flex style={{textAlign:'right'}}>
                            <FlexItem style={{margin:'20px 10px'}}>
                                {ProductLink('admin1')}
                            </FlexItem>
                        </Flex>
                    </WingBlank>
                </div>
            </div>
        );
    }

}


export default BootstrapPage