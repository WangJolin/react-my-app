import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM,DELETE_TODO_ITEM, INIT_LIST_ACTION } from './actionTypes'
import axios from 'axios'

/** 创建各种 action  */
const getInputChangeAction = value => ({
	type: CHANGE_INPUT_VALUE, value
})

const getAddItemAction = () => ({
	type: ADD_TODO_ITEM
})
const getDeleteItemAction = (index) => ({
	type: DELETE_TODO_ITEM,
    value: index
})

const initListAction = (data) => ({
    type: INIT_LIST_ACTION,
    data
})

const getTodoList = () => {
    return (dispatch) => {
        axios.get('./list.json').then(res => {
            const { data } = res.data
            // dispatch 到 store
            dispatch(initListAction(data))
        })
    }
}
export {
    getInputChangeAction,
    getAddItemAction,
    getDeleteItemAction,
    initListAction,
    getTodoList,

}