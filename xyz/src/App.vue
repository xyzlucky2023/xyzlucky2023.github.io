<script lang="ts">
import { RouterLink, RouterView } from 'vue-router';

export default {
  data() {
	  return {
    	imageClick: () => {
        window.open("https://apps.apple.com/app/id6444668239")
      }
  	}
	}
}
</script>

<template>
  <div class="content">
    <div class="header">
        <img alt="Lucky logo" class="logo" src="@/assets/logo.svg" width="180" height="180" />
        <h1>{{ $t("message.lucky") }}</h1>
        <div class="appstore" @click=imageClick > 
          <picture style="align-self:center; margin-left: 16px; display: flex" width="30" height="30">
            <source media="(prefers-color-scheme: dark)" srcset="@/assets/apple_black.svg" />
            <img src="@/assets/apple_white.svg" />
          </picture>
          <h3 style="text-align:center; margin-right: 16px;">App Store</h3>
        </div>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
    <RouterView/>
    <h6 style="text-align:center; margin-top: 80px; display: block;">©Lucky</h6>
  </div>
</template>

<style scoped>

.appstore {
  border-radius: 13px;
  background-color: var(--color-button);
  color: var(--color-background);
  display: flex;
  width: 140px;
  height: 40px;
  margin: auto;
  margin-top: 20px;
  align-items: center;
}

.content {
  display: block;
  margin-bottom: auto;
}

.header {
  display: block;
  margin-bottom: 50px;
  align-items: center;
  margin: auto;
}

h1 {
  font-weight: 500;
  font-size: 2.6rem;
  text-align: center;
  margin: auto;
}

.logo {
  display: flex;
  margin: auto;
}

nav {
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
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
  nav {
    text-align: center;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}

</style>
