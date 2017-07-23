import React, {Component} from 'react';
import {Carousel, WingBlank, Flex, WhiteSpace, Table, Icon} from 'antd-mobile';
import constant from '../constant/constant';
import {intro} from '../actions/introduce';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

const columns = [
    {title: '第一次合同总额', dataIndex: 'totalprice', key: 'h', width: '1rem'},
    {title: '提成', dataIndex: 'commission', key: 'i', width: '1rem'},
];

class IntroducePage extends Component {

    componentWillMount() {
        const {dispatch} = this.props;
        dispatch(intro());
    }

    render() {
        const {introData} = this.props;
        return (
            <div style={{backgroundColor: 'rbg(245,245,249)'}}>
                <WhiteSpace size="lg"/>
                <div style={{width: "100%", textAlign: "center", color: "#bbb"}}>转介绍</div>
                <hr/>
                <br/>
                <WingBlank size="lg">
                    <div style={{padding: 10}}>
                        <div style={{fontSize:30,backgroundColor:'rgb(81,202,201)',color:'white',padding:30,borderTopLeftRadius:20,borderTopRightRadius:20}}>转介绍提成标准:</div>
                        <Table
                            style={{borderWidth:1,borderColor:'#ccc'}}
                            scrollX={true}
                            columns={columns}
                            dataSource={introData}
                        />
                    </div>
                    <br/>
                    <div style={{fontSize:20,color:'#666'}}>注：您不需要谈合作事宜，只需转介绍。提成是指一个项目所有转介绍人的总提成。</div>
                    <br/>
                </WingBlank>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    const {introduce} = state;
    return {
        introData: introduce.introData,
    }
}
export default connect(mapStateToProps)(IntroducePage)
