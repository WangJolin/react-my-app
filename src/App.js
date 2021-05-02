// import WEReact from './WE_react/app'
// import ATodolist from './AntdTodoList/ATodolist'
import RRTodoList from './RRTodoList/RRTodoList'
import { Provider } from 'react-redux';
import store from './store';
function App() {
	return (
		<div>
			{/* <WEReact /> */}
			{/* <ATodolist /> */}
			{/* <RRTodoList /> */}
      <Provider store={store}>
        <RRTodoList />
      </Provider>
		</div>
	)
}

export default App
