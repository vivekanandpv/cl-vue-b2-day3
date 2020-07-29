<template>
  <div>
    <h3>Working with Http</h3>
  </div>
</template>

<script>
export default {
  async created() {
    try {
      //  since the http client is configured for global injector,
      //  we can use it as part of every child
      //  More info: https://github.com/axios/axios#axios-api
      const data = await this.$http.get(`users?page=2`);
      console.log('Server', data);
    } catch (error) {
      console.log('Error', error);
    }
  },
};
</script>

<style></style>
