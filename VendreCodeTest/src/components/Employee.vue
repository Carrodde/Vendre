<script setup lang="ts">
import { IEmployee } from "../models/IEmployee";

interface EmployeeProps {
  employee: IEmployee;
}

defineProps<EmployeeProps>();
</script>

<template>
  <article>
    <img src="" alt="" />
    <h2></h2>
    <p></p>
  </article>
</template>

<style scoped></style>
