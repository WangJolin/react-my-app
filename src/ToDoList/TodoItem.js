import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TodoItem extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    shouldComponentUpdate(nextProps, nextState) {
        // 当 content 不更新时，不进行渲染，提升性能
        if(nextProps.content !== this.props.content){
            return true
        } else {
            return false
        }
    }

    render() {
        const {content, index} = this.props
        return (
            <li onClick={this.handleClick.bind(index)}>
                {content}
            </li>
        )
    }
    handleClick(index) {
        // 调用父组件的handleItemDelete方法
        this.props.handleItemDelete(index)
    }
}

// 为父组件传入的值做校验
TodoItem.propTypes = {
    content: PropTypes.string, // content必须是一个字符串
    index: PropTypes.number, // index必须是一个数字
    handleItemDelete: PropTypes.func, // handleItemDelete必须是一个函数
}

TodoItem.defaultProps = {
    
}
export default TodoItem
