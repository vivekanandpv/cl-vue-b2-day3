<template>
  <div>
    <h3>State Management</h3>
    <hr />
    <div class="row">
      <div class="col">
        <app-left-pane></app-left-pane>
      </div>
      <div class="col">
        <app-right-pane></app-right-pane>
      </div>
    </div>
  </div>
</template>

<script>
import LeftPane from "./LeftPane";
import RightPane from "./RightPane";
export default {
  components: {
    "app-left-pane": LeftPane,
    "app-right-pane": RightPane,
  },
};
</script>

<style>
</style>