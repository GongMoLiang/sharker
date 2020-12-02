import React, { Component } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
import { Table, Card, Row, Col, Modal, message } from 'antd'
import { connect } from 'react-redux'
import { EditOutlined, DeleteOutlined, CopyOutlined, EyeOutlined } from '@ant-design/icons'



@connect(store=>{ return store})
export default class StudentAddModal extends Component {

    columns = [
        {
            title: '班级',
            dataIndex: 'grade',
            key: 'grade',
            align: 'center',
            width: 80
        },
        {
            title: '学号',
            dataIndex: 'id',
            key: 'id',
            align: 'center',
            width: 80
        },
        {
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
            align: 'center',
            width: 80
        },
        {
            title: '年龄',
            dataIndex: 'age',
            key: 'age',
            align: 'center',
            width: 80,
        },
        {
            title: '家庭住址',
            dataIndex: 'address',
            key: 'address',
            align: 'center',
            width: 200,
        },
        {
            title: '家长姓名',
            dataIndex: 'parent',
            key: 'parent',
            align: 'center',
            width: 80
        },
        {
            title: '联系方式',
            dataIndex: 'phone',
            key: 'phone',
            align: 'center',
            width: 100
        },
        {
            title: '操作',
            dataIndex: 'oprtor',
            key: 'oprtor',
            align: 'center',
            width: 150,
            render: (target, values) => {
                const { name, phone, address } = values
                const { onEdit } = this.props
                return (
                    <Row>
                        <Col span={4} offset={1}>
                            <EditOutlined title="修改" onClick={() => { onEdit(values) }} />
                        </Col>
                        <Col span={4} offset={2}>
                            <DeleteOutlined title="删除" onClick={this.handleDelteStudent} />
                        </Col>
                        <Col span={4} offset={2}>
                            <CopyToClipboard
                                key="copy"
                                text={`${name} ${phone} ${address}`}
                                onCopy={() => { message.success('复制成功') }}
                            >
                                <CopyOutlined title="复制" />
                            </CopyToClipboard>
                        </Col>
                        <Col span={4} offset={2}>
                            <EyeOutlined title="查看" />
                        </Col>
                    </Row>
                )
            }
        },
    ]

    handleDelteStudent = () => {
        Modal.confirm({
            content: '确人删除此学生信息？',
            onOk: () => {
                message.success('删除成功')
            }
        })
    }

    handleEditStudent = () => {

    }

    componentDidMount(){
        setTimeout(() => {
            console.log(this.props)
            this.props.dispatch({
                type: 'CHANGEPAGE',
                page: 4
            })

        }, 10*1000);

    }

    render() {

        const { dataSource, total, pageSize, current } = this.props
        return (
            <Card>
                <div>{current}</div>
                <Table
                    rowKey="id"
                    bordered={true}
                    dataSource={dataSource}
                    columns={this.columns}
                    pagination={{
                        size: 'small',
                        showSizeChanger: true,
                        showTotal: () => `共 ${total} 项`,
                        pageSize: pageSize,
                        // onChange: (page) => this.handlePaginationChange({ page_index: page }),
                        // onShowSizeChange: (current, size) => this.handlePaginationChange({ page_size: size })
                    }}
                ></Table>
            </Card>

        )
    }
}
