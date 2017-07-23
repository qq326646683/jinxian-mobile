import React, {Component} from 'react';
import {createForm} from 'rc-form';
import {
    Carousel,
    Toast,
    TextareaItem,
    Picker,
    Button,
    InputItem,
    List,
    WingBlank,
    Flex,
    WhiteSpace,
    Icon
} from 'antd-mobile';
import constant from '../constant/constant';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {askPrice} from '../actions/askprice';
import address from '../util/address';
const FlexItem = Flex.Item;

class AskPricePage extends Component {
    state = {
        phonehasError: false,
        phonetext: ''
    }

    onPhonechange(text) {
        if (text.replace(/\s/g, '').length < 11) {
            this.setState({phonehasError: true});
        } else {
            this.setState({phonehasError: false});
        }
        this.setState({phonetext: text});
    }

    submit() {
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);

                for (let key in values) {
                    if (values[key] === undefined) {
                        Toast.info('请输入完整信息～');
                        return;
                    }
                }

                Toast.loading('加载中...', 20);

                const {dispatch} = this.props;
                values.address = values.address[0] +','+ values.address[1] +','+ values.address[2];
                values.mobile = values.mobile.replace(' ', '');
                dispatch(askPrice(values)).then(result=>{
                    if(result&&!result.loading){
                        Toast.hide();
                        Toast.success('提交成功',1)
                    }
                });


            }
        });
    }

    render() {
        const {getFieldProps} = this.props.form;
        return (
            <div>
                <WhiteSpace size="lg"/>
                <div style={{width: "100%", textAlign: "center", color: "#bbb"}}>询价</div>
                <hr/>
                <div>
                    <WhiteSpace size="lg"/>

                    <List renderHeader={() => '请认真填写，确保工作人员精准报价及联系您：'}>
                        <InputItem
                            {...getFieldProps('nickname')}
                            placeholder="请输入姓名"
                        >姓名:</InputItem>

                        <InputItem
                            {...getFieldProps('mobile')}
                            type="phone"
                            placeholder="请输入手机号"
                        >手机号:</InputItem>

                        <InputItem
                            {...getFieldProps('weixin')}
                            placeholder="请输入微信号"
                        >微信号:</InputItem>

                        <Picker extra="请选择(可选)"
                                data={address}
                                title="选择地区"
                                {...getFieldProps('address')}
                                onOk={e => console.log('ok', e)}
                        >
                            <List.Item arrow="horizontal">所在城市:</List.Item>
                        </Picker>

                        <TextareaItem
                            {...getFieldProps('need')}
                            title="需求:"
                            autoHeight
                            labelNumber={5}
                        />
                    </List>
                    <WhiteSpace size="lg"/>
                    <WingBlank size="lg">
                        <Button className="btn" type="primary" onClick={() => {
                            this.submit()
                        }}>提交</Button>
                    </WingBlank>

                </div>
            </div>
        );
    }

}

const BasicInputExampleWrapper = createForm()(AskPricePage);
const mapStateToProps = (state) => {
}
export default connect(mapStateToProps)(BasicInputExampleWrapper)
