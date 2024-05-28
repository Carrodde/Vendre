<script setup lang="ts">
import { IEmployee } from "../models/IEmployee";

interface EmployeeProps {
  employee: IEmployee;
}

defineProps<EmployeeProps>();
</script>

<template>
  <article>
    <img :src="employee.avatar" :alt="employee.frist_name" />
    <h2>{{ employee.first_name }} {{ employee.last_name }}</h2>
    <a :href="'mailto:' + employee.email">{{ employee.email }}</a>
  </article>
</template>

<style scoped>
article {
  padding: 10px;
  border-radius: 8px;
  background-color: aqua;
  width: 200px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 10px;
}
img {
  border-radius: 50%;
}
</style>
