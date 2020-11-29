import React, { Component } from 'react'
import { Modal, Form, Input, InputNumber } from 'antd'

const { Item: FormItem } = Form

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 5 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    }
}

export default class StudentAddModal extends Component {

    render() {

        const { isShowAddStundetModal, onOk, onCancel, onFinsh, fromRef, formFields } = this.props
        const { id, name } = formFields
        console.log(formFields, id)
        return (
            <Modal
                title="新增学生信息"
                visible={isShowAddStundetModal}
                okText="确认"
                cancelText="取消"
                onOk={onOk}
                onCancel={onCancel}
            >
                <Form  {...formItemLayout} onFinish={onFinsh} ref={fromRef} >
                    <FormItem
                        label="班&emsp;&emsp;级"
                        rules={[
                            {
                                required: true,
                                message: '请输入班级'
                            }
                        ]}
                        name="grade"
                        key="grade" >
                        <Input placeholder="请填写班级" />
                    </FormItem >
                    <FormItem
                        label="学&emsp;&emsp;号"
                        name="id"
                        rules={[
                            {
                                required: true,
                                message: '请输入学号'
                            }
                        ]}
                        key="id">
                        <Input placeholder="请输入学号" />
                    </FormItem >
                    <FormItem
                        label="姓&emsp;&emsp;名"
                        rules={[
                            {
                                required: true,
                                message: '请输入姓名'
                            }
                        ]}
                        name="name"
                        key="name">
                        <Input placeholder="请输入姓名" value={name} />
                    </FormItem>
                    <FormItem
                        label="年&emsp;&emsp;龄"
                        rules={[
                            {
                                required: true,
                                message: '请填写年龄'
                            }
                        ]}
                        name="age"
                        key="age">
                        <InputNumber placeholder="请输入年龄" style={{ width: '100%' }} />
                    </FormItem>
                    <FormItem
                        label="家庭住址"
                        name="address"
                        rules={[
                            {
                                required: true,
                                message: '请输入家庭住址'
                            }
                        ]}
                        key="address"
                    >
                        <Input placeholder="请输入家庭住址" />
                    </FormItem>
                    <FormItem
                        label="家长姓名"
                        key="parents"
                        rules={[
                            {
                                required: true,
                                message: '请输入家长姓名'
                            }
                        ]}
                        name="parentsname">
                        <Input placeholder="请输入家长姓名" />
                    </FormItem>
                    <FormItem
                        label="联系方式"
                        key="phone"
                        name="phone"
                        rules={[
                            {
                                required: true,
                                message: '请输入手机号码'
                            },
                            {
                                pattern: /^1[3456789]\d{9}$/,
                                message: '手机号码不符合规范，请重新输入'
                            },
                        ]}
                        validateTrigger="onBlur" //失去焦点时校验
                    >
                        <Input placeholder="请输入联系方式" style={{ width: '100%' }} />
                    </FormItem>
                </Form>
            </Modal>
        )
    }
}

