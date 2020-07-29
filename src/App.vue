<template>
  <div id="app">
    <app-navbar></app-navbar>
    <h2>Welcome to Vue App</h2>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
export default {
  components: {
    "app-navbar": Navbar,
  },
};
</script>

<style>
</style>
