import React, { Component } from 'react'
import { Form, Input, Button, message } from 'antd'
import { Link } from 'react-router-dom'
import { UserOutlined, LockOutlined, PhoneOutlined } from '@ant-design/icons'

import '../login/Login.less'

const { Item: FormItem } = Form

const layout = {
    labelCol: {
        span: 6
    },
    wrapperCol: {
        span: 18
    }
}
const tailLayout = {
    wrapperCol: {
        offset: 2,
        span: 22
    }
}

export default class LoginForm extends Component {
    state = {
        isDisabled: false
    }

    handleLoginSumit = values => {
        const { history } = this.props
        this.setState({
            isDisabled: true
        })
        setTimeout(() => {
            message.success('登入成功')
            this.setState({
                isDisabled: false
            })
            setTimeout(() => {
                history.push('/student')
            }, 1000)
        }, 200)
    }

    render() {
        const { isDisabled } = this.state
        return (
            <div className="form-login">
                <Form
                    {...layout}
                    name="basic"
                    onFinish={this.handleLoginSumit}
                // onFinishFailed={this.onFinishFailed}
                >
                    <FormItem
                        label="用户名"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: '请输入用户名'
                            }
                        ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} />
                    </FormItem>
                    <FormItem
                        label="手&emsp;机"
                        name="phone"
                        validateTrigger="onBlur" //失去焦点时校验
                        rules={[
                            {
                                required: true,
                                message: '请输入手机号码'
                            },
                            {
                                pattern: /^1[3456789]\d{9}$/,
                                message: '手机号码有误，请重新输入'
                            }
                        ]}
                    >
                        <Input prefix={<PhoneOutlined className="site-form-item-icon" />} />
                    </FormItem>
                    <FormItem
                        label="密&emsp;码"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: '请输入密码'
                            }
                        ]}
                    >
                        <Input prefix={<LockOutlined className="site-form-item-icon" />} />
                    </FormItem>
                    <FormItem {...tailLayout}>
                        <Button
                            type="primary"
                            htmlType="submit"
                            block
                            disabled={isDisabled}
                        >
                            注册
						</Button>
                    </FormItem>
                    <FormItem {...tailLayout}>
                        <span className="login-tip">
                            已有账号，点击
							<Link to="/login">登入</Link>
                        </span>
                    </FormItem>
                </Form>
            </div>
        )
    }
}
