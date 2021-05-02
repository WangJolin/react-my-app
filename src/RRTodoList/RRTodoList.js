import React from 'react'
import { connect } from 'react-redux'

const RRTodoList = props => {
    const { inputValue, list, changeInputValue, handleClick, handleDelete } = props
    return (
        <div>
            <input value={inputValue} onChange={changeInputValue}/>
            <button onChange={handleClick}>提交</button>
            <ul>
                {
                    list.map((item, index) => {
                        return <li onClick={handleDelete(index)} key={index}> {item} </li>
                    })
                }
            </ul>
        </div>
    ) 
}

const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}

// store.dispatch => props
const mapDispatchToProps = (dispatch) => {
    return {
        changeInputValue(e) {
            console.log(e.target.value);
            dispatch({type: 'chang_input_value', value: e.target.value})
        },
        handleClick() {
            dispatch({type:'add_todo_item'})
        },
        handleDelete(index) {
            dispatch({type: 'delete_todo_item', value: index})
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(RRTodoList)
