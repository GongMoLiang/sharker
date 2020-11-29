import React, { Component } from 'react'
import { Form, Input, Button, message } from 'antd'
import { Link } from 'react-router-dom'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

import './Login.less'

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
                            登入
						</Button>
                    </FormItem>
                    <FormItem {...tailLayout}>
                        <span className="login-tip">
                            还没有账号，点击
							<Link to="/register">注册</Link>
                        </span>
                    </FormItem>
                </Form>
            </div>
        )
    }
}
