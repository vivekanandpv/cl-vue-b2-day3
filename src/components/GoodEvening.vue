<template>
  <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="display-4 text-secondary">Good Evening</h1>
    </div>
  </div>
</template>

<script>
export default {
  //  destruction hooks
  beforeDestroy() {
    console.log('GoodEvening component beforeDestroy');
  },
  destroyed() {
    console.log('GoodEvening component destroyed');
  },
};
</script>

<style></style>
