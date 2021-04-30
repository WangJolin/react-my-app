import React, { Component } from 'react'
import store from '../Store/index'
import { getInputChangeAction,getAddItemAction,getDeleteItemAction } from '../Store/actionCreateors'
import {ATodoListUI} from './ATodoListUI'

/** 容器组件 */
class ATodoList extends Component {
	constructor(props) {
		super(props)
		this.hanldeInputChange = this.hanldeInputChange.bind(this)
		this.handleStoreChange = this.handleStoreChange.bind(this)
		this.handleBtnClick = this.handleBtnClick.bind(this)
		this.handleItemDelete = this.handleItemDelete.bind(this)
		this.state = store.getState()
		store.subscribe(this.handleStoreChange)
	}

	componentDidMount() {}

	render() {
		const { inputValue, list } = this.state
		return  <ATodoListUI 
					inputValue={inputValue}
					list={list}
					hanldeInputChange={this.hanldeInputChange}
					handleBtnClick={this.handleBtnClick}
					handleItemDelete={this.handleItemDelete}
				/>
	}

	hanldeInputChange(e) {
		store.dispatch(getInputChangeAction(e.target.value))
	}
	handleBtnClick() {
		store.dispatch(getAddItemAction())
	}
	handleItemDelete(index) {
		store.dispatch(getDeleteItemAction(index))
	}
	handleStoreChange() {
		this.setState(store.getState())
	}
}

export default ATodoList
