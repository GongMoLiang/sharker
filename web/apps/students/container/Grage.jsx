import React, { Component, Fragment } from 'react'
import { Card } from 'antd'
import ContentContainer from '../../../common/components/ContentContainer'
import TopbarContainer from '../../../common/components/TopbarContainer'
import Editor from '../../../common/components/Editor'


export default class Grade extends Component {
    handleEditChange = (value)=>{
        console.log(value)
    }

    render(){
        return (
            <Fragment>
                <TopbarContainer title="成绩查询" />
                <ContentContainer>
                    <Card title="活动方案">
                        <Editor
                            content=""
                            onChange={ this.handleEditChange}
                        />
                    </Card>
                </ContentContainer>
            </Fragment>
        )
    }
}