import React from 'react'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import './ATodolist.css'
/**
 * UI 组件，只负责渲染，当组件只有一个 render 函数时，可以将其定义为无状态组件
 */
const ATodoListUI = (props) => {
    const { inputValue, list, handleBtnClick, handleItemDelete, hanldeInputChange } = props
    return (
        <div className="todo_container">
            <Input
                value={inputValue}
                placeholder="请输入"
                style={{ width: '300px' }}
                onChange={hanldeInputChange}
            />
            <Button type="primary" onClick={handleBtnClick}>
                提交
            </Button>
            <List
                style={{ marginTop: '10px', width: '500px' }}
                bordered
                dataSource={list}
                renderItem={item => <List.Item onClick={index => handleItemDelete(index)}>{item}</List.Item>}
            />
        </div>
    )
}

export {ATodoListUI}