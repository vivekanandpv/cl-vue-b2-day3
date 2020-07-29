<template>
  <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="display-4 text-primary">Good Morning</h1>
    </div>
  </div>
</template>

<script>
export default {
  //  destruction hooks
  beforeDestroy() {
    console.log('GoodMorning component beforeDestroy');
  },
  destroyed() {
    console.log('GoodMorning component destroyed');
  },
};
</script>

<style></style>
