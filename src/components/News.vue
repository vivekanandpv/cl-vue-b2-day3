<template>
  <div>
    <h3>News</h3>
    <p>City: {{city}} Year: {{year}}</p>
  </div>
</template>

<script>
export default {
  props: ["city", "year"],
};
</script>

<style>
</style>