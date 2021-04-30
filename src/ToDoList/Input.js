import React, { Component } from 'react'

export class Input extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { handleInputChange, handleBtnClick} = this.props
    return (
      <div>
        <label htmlFor="inserArea">输入内容</label>
        <input
            id="inserArea"
            placeholder="请输入"
            // onChange={}
        />
        <button onClick={handleBtnClick}>提交</button>
      </div>
    )
  }
}

export default Input
