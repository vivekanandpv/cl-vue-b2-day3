<template>
  <div>
    <h3>News</h3>
    <p>City: {{city}} Year: {{year}}</p>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      //  this refers to the current instance of the component
      //  $route is the application-wide singleton injected by Vue
      city: this.$route.params.city,
      year: this.$route.params.year,
    };
  },
};
</script>

<style>
</style>