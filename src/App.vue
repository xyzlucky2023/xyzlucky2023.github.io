<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <div class="content">
    <div class="header">
        <img alt="Lucky logo" class="logo" src="@/assets/logo.svg" width="180" height="180" />
        <h1>幸运者 - Lucky</h1>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
    <RouterView/>
  </div>
</template>

<style scoped>

.content {
  display: block;
  margin-bottom: auto;
}

.header {
  width: 100%;
  margin-bottom: 50px;
}

h1 {
  font-weight: 500;
  font-size: 2.6rem;
  text-align: center;
}

.logo {
  display: flex;
  width: 100%;
}

nav {
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {

.container {
  display: flex;
  background-color: red;
}

  nav {
    text-align: center;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}

</style>
