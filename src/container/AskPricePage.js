import React, {Component} from 'react';
import { createForm } from 'rc-form';
import {Carousel,InputItem,List, WingBlank, Flex, WhiteSpace, Icon} from 'antd-mobile';
import constant from '../constant/constant';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
const FlexItem = Flex.Item;

class AskPricePage extends Component {

    render() {
        const { getFieldProps } = this.props.form;
        return (
            <div>
                <WhiteSpace size="lg"/>
                <div style={{width: "100%", textAlign: "center", color: "#bbb"}}>询价</div>
                <hr/>
                <div>
                    <WhiteSpace size="lg"/>
                    <WingBlank size="lg">
                        <List renderHeader={() => 'Customize to focus'}>
                            <InputItem
                                {...getFieldProps('autofocus')}
                                clear
                                placeholder="auto focus in Alipay client"
                                autoFocus
                            >标题</InputItem>
                            <InputItem
                                {...getFieldProps('focus')}
                                clear
                                placeholder="click the button below to focus"
                                // focused={this.state.focused}
                                onFocus={() => {
                                    this.setState({
                                        focused: false,
                                    });
                                }}
                            >标题</InputItem>
                            <List.Item>
                                <div
                                    style={{ width: '100%', color: '#108ee9', textAlign: 'center' }}
                                    onClick={() => {
                                        this.setState({
                                            focused: true,
                                        });
                                    }}
                                >
                                    click to focus
                                </div>
                            </List.Item>
                        </List>
                    </WingBlank>
                </div>
            </div>
        );
    }

}

const BasicInputExampleWrapper = createForm()(AskPricePage);
export default BasicInputExampleWrapper