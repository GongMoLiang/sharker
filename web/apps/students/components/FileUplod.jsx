/**
 * 文件上传
 */

import React, { Component } from 'react'
import { Modal, Upload, Alert, Button, message } from 'antd'
import { InboxOutlined, DownloadOutlined } from '@ant-design/icons'

const { Dragger } = Upload

export default class FileUpload extends Component {

    handleBeforeUpload = (file) => {
        const isXlsx = file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'

        if (!isXlsx) {
            message.error('仅支持 xlsx 格式上传，请使用专用模板')
        }

        return isXlsx
    }

    render() {
        const { isShowFileUploadModal, onCancel, isUploading } = this.props
        return (
            <Modal
                visible={isShowFileUploadModal}
                title="文件上传"
                footer={<Button type="primary" onClick={onCancel}>取消</Button>}
                onCancel={onCancel}
                width={800}
            >
                <Button type="primary" className="mb15" size="small">点击下载模板 <DownloadOutlined style={{ fontSize: 16 }} /></Button>
                <div className="mb15">
                    <Alert message="(仅支持xlsx格式文件，请使用专用模板上传！）" type="warning" />
                </div>
                <Dragger
                    action="#"
                    multiple={false}
                    showUploadList={false}
                    disabled={isUploading}
                    beforeUpload={this.handleBeforeUpload}
                >
                    <p className="ant-upload-drag-icon">
                        <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">点击上传或者拖拽文件上传</p>
                </Dragger>
            </Modal>
        )
    }
}
