<template>
  <div>
    <h3>Working with Http</h3>
  </div>
</template>

<script>
import { http } from '../lib/http';
export default {
  //    we can make use of the new async/await from ES6
  //    this requires the build toolchain
  //    more info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
  async created() {
    try {
      const data = await http.get(`users?page=2`);
      console.log('Server', data);
    } catch (error) {
      console.log('Error', error);
    }
  },
};
</script>

<style></style>
