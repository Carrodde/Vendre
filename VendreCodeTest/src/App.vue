<script setup lang="ts">
import { onMounted, ref } from "vue";
import { getEmployees } from "./services/employeeService";
import Employee from "./components/Employee.vue";
import { IEmployee } from "./models/IEmployee";

const employees = ref<IEmployee[]>([]);

onMounted(async () => {
  try {
    const response = await getEmployees();
    employees.value = response;
    console.log(employees.value);
  } catch (error) {
    console.error("Error fetching employees:", error);
  }
});
</script>

<template>
  <div>
    <Employee
      v-for="employee in employees"
      :key="employee.id"
      :employee="employee"
    />
  </div>
</template>

<style scoped></style>
