<script setup lang="ts">
import { onMounted } from "vue";
import { getEmployees } from "./services/employeeService";

onMounted(async () => {
  try {
    const employees = await getEmployees();
    console.log(employees);
  } catch (error) {
    console.error("Error fetching employees:", error);
  }
});
</script>

<template></template>

<style scoped></style>
