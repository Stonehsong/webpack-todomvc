<template>
  <li class="todo" :class="{completed: todo, editing: editing}" >
    <div class="view">
      <input type="checkbox" class="toggle" :checked="todo.done">
      <label v-text="todo.text" @dblclick="editing = true"></label>
      <button class="destroy" @click="deleteTodo({todo:todo})"></button>
    </div>
    <input class="edit"
    v-show="editing"
    v-focus="editing"
    :value="todo.text">
  </li>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'Todo',
  props: ['todo'],
  data(){
    return {
      editing: false
    }
  },
  methods: {
    ...mapMutations([
          'deleteTodo',
          'toggleTodo',
          'editTodo'
    ]),
    doneEdit(e){
      let value = e.target.value.trim()
      let { todo } = this
      if (!value) {
        this.deleteTodo({todo})
      }else if(this.editing){
        this.editTodo({
          todo,
          value
        })
      }
      this.editing = false
    },
    cancelEdit(e){
      e.target.value = this.todo.text
      this.editing = false
    },
  },
  directives: {
    focus (el, { value }, { context }) {
      console.log('el')
      console.log(el)
      console.log('value')
      console.log(value)
      console.log('context')
      console.log(context)

      if (value) {
        context.$nextTick(() => {
          el.focus()
        })
      }
    }
  }
}
</script>
