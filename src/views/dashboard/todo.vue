<template>
  <h4 class="card-title">
    代办事项
  </h4>
  <div class="card-content todo-list">
    <div
      v-for="item in todoList"
      :key="item.key"
      :class="['todo-content', item.done ? 'todo-done' : '']"
      @click="changeTodo(item)"
    >
      <span class="todo-text">{{ item.content }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const todoList = ref(Array(10).fill(null).map((_item, index) => ({ key: index, content: `赚他${index + 1}个亿！`, done: false })))

const changeTodo = (todo) => {
  todo.done = !todo.done
}

defineExpose({
  todoList
})
</script>

<style lang="scss" scoped>
.todo-content {
  padding: 12px;
  cursor: pointer;

  &:nth-last-child(1) {
    border-bottom: 1px solid #f0f0f0a3;
  }

  &.todo-done {
    text-decoration: line-through;
  }
}
.todo-content + .todo-content {
  border-top: 1px solid #f0f0f0a3;
}
</style>
