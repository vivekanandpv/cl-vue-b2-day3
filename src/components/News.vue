<template>
  <div>
    <h3>News</h3>
    <p>City: {{city}} Year: {{year}}</p>
    <p>Query params: {{queryParams}}</p>
    <hr />
    <button class="btn btn-warning" @click="navigate">Go to About Page!</button>
  </div>
</template>

<script>
export default {
  props: ["city", "year"],
  data: function () {
    return {
      queryParams: this.$route.query,
    };
  },
  methods: {
    navigate: function () {
      //  $router is another application-wide singleton used for navigation
      this.$router.push({ path: "/about" });
    },
  },
};
</script>

<style>
</style>