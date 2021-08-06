<template>
  <Welcome />
  <main></main>
</template>

<script setup>
import Welcome from './views/Welcome.vue'
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Montserrat:400);

:root {
  --welcome-height: 90vh;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

body,
h1 {
  margin: 0;
}

body {
  color: white;
  overflow-y: scroll;
}
main {
  position: absolute;
  width: 100%;
  margin-top: var(--welcome-height);
  background: #111827;
  box-shadow: 0px -6px 6px 10px #111827;
}
a {
  color: inherit;
  text-decoration: none;
}

.red--text {
  color: red;
}

::-webkit-scrollbar {
  width: 15px;
  height: 15px;
}
::-webkit-scrollbar-track {
  background: white;
}
::-webkit-scrollbar-thumb {
  background: #5e6165;
  background-clip: content-box;
  border: 3px solid transparent;
  border-radius: 9px;
}
::-webkit-scrollbar-thumb:hover {
  background: #363638;
  background-clip: content-box;
}
::-webkit-scrollbar-track:vertical {
  box-shadow: inset 2px 0 1px -1px rgba(0, 0, 0, 0.1);
}
::-webkit-scrollbar-track:horizontal {
  box-shadow: inset 0 2px 1px -1px rgba(0, 0, 0, 0.1);
}

.ripple__container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
  border-radius: inherit;
}
.ripple {
  position: absolute;
  background: currentColor;
  border-radius: 50%;
  opacity: 0.4;
  transform: translate(-50%, -50%) scale(0);
  transition-property: transform, opacity, background;
  transition-duration: 500ms;
}
.ripple--active {
  opacity: 0.25;
  transform: translate(-50%, -50%) scale(1);
}
</style>
