<script setup>
import { RouterLink, RouterView } from 'vue-router'
//import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <nav class="navbar bg-danger ">
      <div class="container-fluid">
        <RouterLink class="navbar-brand" to="/">
          <img src="@/assets/poke2.svg" alt="logoNavBrand" class="d-inline-block align-text-top d-absolute">
        </RouterLink>
        <div class="d-flex me-5">
          <RouterLink to="/" class="btn btn-outline-info me-4">Home</RouterLink>
          <RouterLink to="/pokemons" class="btn btn-outline-info me-4">Pokemons</RouterLink>
          <RouterLink to="/favorites" class="btn btn-outline-info">Favoritos</RouterLink>

        </div>



      </div>
    </nav>
  </header>
  <div class="container-xl text-center">
    <RouterView />
  </div>
</template>

<style></style>
