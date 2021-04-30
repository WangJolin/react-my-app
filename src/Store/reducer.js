import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './actionTypes'

const defaultState = {
	inputValue: '',
	list: [1, 2],
}
/**
 * state: 设置默认状态
 * action: 设置动作
 * reducer 可以以接收 state，但是绝不能修改 state
 */
// eslint-disable-next-line
export default (state = defaultState, action) => {
	const newState = JSON.parse(JSON.stringify(state))
	const { type, value } = action
	switch (type) {
		case CHANGE_INPUT_VALUE:
			newState.inputValue = value
			break
		case ADD_TODO_ITEM:
			newState.list = [...newState.list, newState.inputValue]
			newState.inputValue = ''
			break
		case DELETE_TODO_ITEM:
			newState.list.splice(value, 1)
			break
		default:
			break
	}
	return newState
}