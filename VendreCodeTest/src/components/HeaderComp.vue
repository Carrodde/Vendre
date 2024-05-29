<script setup lang="ts"></script>
<template>
  <header>
    <div class="flex-container">
      <div class="logo">
        <img src="../assets/vendre_logo.webp" alt="Vendre" />
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import "../assets/scss/__variables.scss";
header {
  position: sticky;
  top: 0;
  padding: 20px 0 10px 10px;
  width: 100%;
  background: rgba(255, 255, 255, 0.5);
  height: calc(34px + 23px * 2);
  backdrop-filter: blur(10px);
}

.flex-container {
  display: flex;
  align-items: center;
  height: 100%;
  margin: 0 40px;
}

.logo {
  position: relative;
  display: flex;
  height: 48px;
  width: 170px;
}
</style>
