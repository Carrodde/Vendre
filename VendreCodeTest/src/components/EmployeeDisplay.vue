<script setup lang="ts">
import { onMounted, ref } from "vue";
import { IEmployee } from "../models/IEmployee";
import { getEmployees } from "../services/employeeService";
import Employee from "./Employee.vue";

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
    <section>
      <h1>Våra medarbetare</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
        aliquam reiciendis minus atque architecto in error vero? Modi, voluptas
        architecto, amet dolorum corporis neque, cumque veniam iure minus rerum
        quia. Repellat totam assumenda sunt, placeat dicta asperiores doloribus,
        repellendus debitis numquam, iusto quo explicabo. Animi rerum quidem
        illum aperiam corrupti provident quia nobis iusto dolor. Officiis eos
        enim sed similique.
      </p>
    </section>

    <section class="employees">
      <Employee
        v-for="employee in employees"
        :key="employee.id"
        :employee="employee"
      />
    </section>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/scss/__variables.scss";

h1 {
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 40px auto;
  color: $dark-text-color;
  font-size: 3rem;
  font-weight: 600;
  letter-spacing: -0.5px;
}

p {
  margin: 30px auto;
  width: 50%;
}

.employees {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 75%;
  max-width: 1100px;
}
</style>
