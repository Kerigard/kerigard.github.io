<template>
  <Stars />

  <div class="welcome">
    <h1>Привет,</h1>
    <h1>Я <span class="red--text">Владислав</span>,</h1>
    <h1><span class="red--text">Full Stack</span> разработчик</h1>
    <h2>JavaScript / Vue / Laravel</h2>
  </div>
</template>

<script setup>
import Stars from '../components/Stars.vue'
</script>

<style scoped>
.welcome {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: var(--welcome-height);
  padding: 40px;
  font-family: 'Montserrat';
  color: white;
  text-transform: uppercase;
  line-height: 1;
}

h1 {
  font-size: 72px;
  font-weight: 400;
}
h2 {
  color: rgb(255 255 255 / 60%);
  font-weight: 400;
}
</style>
