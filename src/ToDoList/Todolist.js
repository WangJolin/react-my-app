import React, { Component, Fragment } from 'react'
import TodoItem from './TodoItem'
export class Todolist extends Component {

    constructor(props) {
        super(props)
        // 当组件的state或者props发生改变时，render函数就是重新执行，即使用新的数据渲染视图
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleBtnClick = this.handleBtnClick.bind(this)
        this.handleItemDelete = this.handleItemDelete.bind(this)
        // 在状态中定义数据
        this.state = {
            inputValue: '',
            list: []
        }
    }

    render() {
        return (
            <Fragment>
                <label htmlFor="inserArea">输入内容</label>
                <input
                    id="inserArea"
                    placeholder="请输入"
                    onChange={this.handleInputChange}
                />
                <button onClick={this.handleBtnClick}>提交</button>

                <ul>
                   {this.getTodoItem()}
                </ul>

            </Fragment>
        )
    }

    handleInputChange(e) {
      const value = e.target.value
      this.setState(() => ({inputValue: value}))
    }
    handleBtnClick() {
      this.setState((prevState) => ({
        list: [...prevState.list, prevState.inputValue],
        inputValue: '',
      }))      
    }
    handleItemDelete(index) {
        this.setState((prevState) => {
          // 拷贝数组
          const list = [...prevState.list]
          list.splice(index, 1)
          return {list}
        })
    }
    getTodoItem() {
      return this.state.list.map((item,index) => {
        return (
          <TodoItem
            content={item}
            index={index}
            key={index}
            handleItemDelete={this.handleItemDelete}/>
        )
      }) 
    }
}


export default Todolist
