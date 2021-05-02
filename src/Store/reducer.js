const defaultState = {
    inputValue: '',
    list: []
}

export default (state = defaultState, action) => {
    const { type, value } = action
    const newState = JSON.parse(JSON.stringify(state))
    switch (type) {
        case 'chang_input_value':
            newState.inputValue = value
            break;
        case 'add_todo_item':
            newState.list.push(newState.inputValue)
            newState.list = ''
            break;
        case 'delete_todo_item':
            newState.list.splice(value, 1)
            break;
        default:
            break;
    }
    return newState
}