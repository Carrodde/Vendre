<script setup lang="ts"></script>
<template>
  <footer>
    <div class="flex-container">
      <div class="logo">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.2168 39.0066H25.7115L11.5377 0H0L12.4928 34.3074C13.5243 37.1346 16.1986 39.0066 19.2168 39.0066Z"
            fill="white"
          ></path>
          <path
            d="M32.8556 14.2884C36.7907 14.2884 39.9998 11.0792 39.9998 7.1442C39.9998 3.20916 36.7907 0 32.8556 0C28.9206 0 25.7114 3.20916 25.7114 7.1442C25.7114 11.0792 28.9206 14.2884 32.8556 14.2884Z"
            fill="white"
          ></path>
        </svg>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import "../assets/scss/__variables.scss";
footer {
  position: relative;
  bottom: 0;
  padding: 20px 0 10px 10px;
  width: 100%;
  background: $primary-color;
  height: 300px;
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
