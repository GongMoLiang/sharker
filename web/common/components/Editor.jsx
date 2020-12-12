import React, { Component, Fragment } from 'react'
import ReactQuill from 'react-quill'
import { ShrinkOutlined, ArrowsAltOutlined } from '@ant-design/icons'
// import { Cos } from '../../../config/interface'
import './Editor.less'

let BlockEmbed = null

// const uploadUrl = `${Cos.url}${Cos.api.uploadFile.path}`

export default class Editor extends Component {
    constructor() {
        super()

        this.state = {
            isShrink: true
        }

        this.modules = {
            toolbar: {
                container: '#toolbar',
                clipboard: {
                    matchVisual: false,
                },
                handlers: {
                    // images: () => {

                    // }
                }
            }
        }

        this.formats = [
            'header', 'font', 'size',
            'bold', 'italic', 'underline', 'strike', 'blockquote',
            'list', 'bullet', 'indent',
            'align', 'picker', 'icon-picke',
            'link', 'image',
        ]
    }

    componentDidMount() {
        this.ReactQuill = ReactQuill
        this.forceUpdate()
    }

    customToolbar() {
        const { isShrink } = this.state
        const colorList = ['#000000', '#e60000', '#ff9900', '#ffff00', '#008a00', '#0066cc', '#9933ff', '#ffffff',
            '#facccc', '#ffebcc', '#ffffcc', '#cce8cc', '#cce0f5', '#ebd6ff', '#bbbbbb', '#f06666', '#ffc266',
            '#ffff66', '#66b966', '#66a3e0', '#c285ff', '#888888', '#a10000', '#b26b00', '#b2b200', '#006100',
            '#0047b2', '#6b24b2', '#444444', '#5c0000', '#663d00', '#666600', '#003700', '#002966', '#3d1466'
        ]

        return (
            <div id="toolbar">
                <button type="button" className="ql-header" value="1"></button>
                <button type="button" className="ql-header" value="2"></button>
                <select className="ql-size" defaultValue="narmall">
                    <option value="small">小</option>
                    <option value="narmall">正常</option>
                    <option value="large">中</option>
                    <option value="huge">大</option>
                </select>
                <button className="ql-bold"></button>
                <button className="ql-italic"></button>
                <button className="ql-underline"></button>
                <button className="ql-strike"></button>
                <select className="ql-color" >
                    { _.map(colorList, (item, index) => {
                        return <option key = { index } value={ item }></option>
                    })}
                </select>
                <select className = "ql-background ql-picker ql-color-picker">
                    { _.map(colorList, (item, index) => {
                        return <option key = { index } value={ item }></option>
                    })}
                </select>
                <button className="ql-indent" value="-1"></button>
                <button className="ql-indent" value="+1"></button>
                <button className="ql-list" value="ordered"></button>
                <button className="ql-list" value="bullet"></button>
                <select className="ql-align ql-picker ql-icon-picker" defaultValue="">
                    <option></option>
                    <option value="center"></option>
                    <option value ="right"></option>
                    <option value="justify"></option>
                </select>
                <button className="ql-link"></button>
                <button style = {{ float: 'right' }} onClick={() => { this.setState({ isShrink: !isShrink })}}>
                    { isShrink ? <ArrowsAltOutlined /> : <ShrinkOutlined  /> }
                </button>
            </div>
        )

    }

    render() {
        const ReactQuill = this.ReactQuill
        const { isShrink } = this.state
        const { content, onChange } = this.props
        const quillWrapper = isShrink ? { width: 800, height: 400, marginBottom: 40 } : { width: '100%', height: 600, marginBottom: 40 }

        return (
            <Fragment>
                {
                    ReactQuill
                        ?
                        <div style ={ quillWrapper} >
                            { this.customToolbar() }
                            <ReactQuill
                                style ={quillWrapper}
                                defaultValue = { content }
                                value = { content }
                                onChange={onChange}
                                modules={this.modules}
                                format={this.format}
                                ref={ (ref) => this.quill = ref }
                            />
                        </div>
                        :
                        '努力加载中'
                }
            </Fragment>
        )
    }
}



class ImageBlot extends BlockEmbed {
    static create(value) {
        let node = super.create()
        node.setAttribute('alt', value.alt)
        node.setAttribute('src', value.url)
        return node
    }

    static value(node) {
        return {
            alt: node.getAttribute('alt'),
            url: node.getAttribute('src')
        }
    }
}
ImageBlot.blotName = 'image'
ImageBlot.tagName = 'img'


