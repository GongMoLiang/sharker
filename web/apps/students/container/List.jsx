import React, { Component, Fragment } from 'react'
import ContentContainer from '../../../common/components/ContentContainer'
import TopbarContainer from '../../../common/components/TopbarContainer'
import { Button, Modal, message } from 'antd'

import StudentAddModal from '../components/StudentAddModal'
import StudentTable from '../components/StudentList'
import FileUplodFileUplod from '../components/FileUplod'

import { studentList, headerList } from '../instance/studentList'
import { downloadExcel } from '../../../common/helper/untils'

export default class StudentList extends Component {

    formRef = React.createRef()

    state = {
        isShowAddStundetModal: false,
        isShowFileUploadModal: false,
        isUploading: false,
        isEdit: false,
        pageIndex: 1,
        pageSize: 5,
        total: 7,
    }

    handleAddStudnet = () => {
        this.setState({
            isShowAddStundetModal: true,
            isEdit: false
        })
    }

    handleAddStudnetOK = () => {
        this.handleFinsh()
    }

    handleAddStudnetCancel = () => {
        const { current: { resetFields } } = this.formRef
        this.setState({
            isShowAddStundetModal: false
        }, () => {
            resetFields()
        })
    }

    handleDelteStudent = () => {
        Modal.confirm({
            content: '确人删除此学生信息？',
            onOk: () => {
                message.success('删除成功')
            }
        })
    }

    handleFinsh = () => {
        const { current: { validateFields, resetFields } } = this.formRef
        validateFields().then((values) => {
            console.log(values)

            resetFields()
            message.success('新增成功')

        }).catch((error) => {
            console.log(error)
        })
    }

    handleExportInfo = () => {
        const contextData = _.reduce(studentList, (result, item) => {

            const dataObj = {}

            _.map(headerList, config => {
                _.extend(dataObj, { [config.title]: _.get(item, config.key, '-') })
            })

            result.push(dataObj)

            return result
        }, [])

        downloadExcel(contextData, '学生信息列表', '学生信息列表.xlsx')

        message.success('导出成功')

    }

    handleFileUpload = () => {
        this.setState({
            isShowFileUploadModal: true
        })
    }

    handleFileUploadCanel = () => {
        this.setState({
            isShowFileUploadModal: false
        })
    }

    handleEdit = (values) => {
        this.setState({
            isShowAddStundetModal: true,
            isEdit: true
        },()=>{
            const { current: { setFieldsValue } } = this.formRef
            setFieldsValue(values)
        })
    }


    render() {

        const { isShowAddStundetModal, isShowFileUploadModal, total, pageIndex, pageSize, isUploading, isEdit } = this.state

        return (
            <Fragment>
                <TopbarContainer title="学生管理"></TopbarContainer>
                <ContentContainer>
                    <div className="ma">
                        <Button type="primary" onClick={this.handleAddStudnet} className="mr15">新增学生</Button>
                        <Button type="primary" onClick={this.handleFileUpload} className="mr15">导入数据</Button>
                        <Button type="primary" onClick={this.handleExportInfo}>导出数据</Button>
                    </div>
                    <StudentTable
                        dataSource={studentList}
                        total={total}
                        pageIndex={pageIndex}
                        pageSize={pageSize}
                        onEdit={this.handleEdit}
                    />
                </ContentContainer>
                <StudentAddModal
                    fromRef={this.formRef}
                    isShowAddStundetModal={isShowAddStundetModal}
                    onOk={this.handleAddStudnetOK}
                    onCancel={this.handleAddStudnetCancel}
                    onFinsh={this.handleFinsh}
                    isEdit={isEdit}
                />
                <FileUplodFileUplod
                    isShowFileUploadModal={isShowFileUploadModal}
                    onCancel={this.handleFileUploadCanel}
                    isUploading={isUploading}
                />
            </Fragment>

        )
    }
}
