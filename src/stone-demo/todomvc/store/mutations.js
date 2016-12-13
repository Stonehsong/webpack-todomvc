/*
* @Author: F1227771
* @Date:   2016-12-12 19:45:28
* @Last Modified by:   Stone_h
* @Last Modified time: 2016-12-13 22:53:12
*/
export const STORAGE_KEY = 'todos-store'

export const state = {
	 todos : JSON.parse( window.localStorage.getItem(STORAGE_KEY) || '[]' )
}

export const mutations = {

	addTodo(state,{ text }){
		state.todos.push({
			text,
			done:false,
		})
	},

	deleteTodo(state,{ todo }){
		state.todos.splice(state.todos.indexOf(todo), 1)
	},

	toggleTodo(state,{ todo }){
		todo.done = !todo.done
	},

	editTodo(state,{ todo, value }){
		todo.text = value
	},

	toggleAll(state,{ done }){
		state.todos.foreach((todo)=>{
			todo.done = done
		})
	},

	clearCompleted(state){
		state.todos = state.todos.filter(todo => !todo.done)
	},

	// saveStorage(){
	// 	window.localStorage.setItem(STORAGE_KEY, state.todos)
	// },
}


// for testing
if (navigator.userAgent.indexOf('PhantomJS') > -1) {
  window.localStorage.clear()
}