<template>
  <h1>{{ headerTitle }}</h1>
  <div>{{ count }}</div>
  <button @click="showAlert">click</button>
</template>

<script setup lang="ts">
import { ref, PropType, defineProps } from "vue";

interface profile {
  name: string;
  age: number;
}

const props = defineProps({
  headerTitle: {
    type: String,
    required: true,
  },
  userProfile: {
    type: Object as PropType<profile>,
  },
});

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const count = ref<string>("hi");
const apiUrl = "https://jsonplaceholder.typicode.com/todos";

async function fetchTodos(): Promise<Todo[]> {
  const response = await fetch(apiUrl);
  const data: Todo[] = await response.json();
  console.log(data);
  return data;
}

fetchTodos().then((response) => response[0].id);

const showAlert = (event: MouseEvent) => {
  alert("hi");
};
</script>

<style scoped></style>
