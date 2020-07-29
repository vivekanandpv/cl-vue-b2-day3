<template>
  <div class="container">
    <h3>Home</h3>
    <hr />
    <h4>
      Dynamic Components and Destruction Hooks
      <button class="btn btn-warning" @click="toggle">Toggle</button>
    </h4>
    <component :is="comp"></component>
  </div>
</template>

<script>
import GoodMorning from './GoodMorning';
import GoodEvening from './GoodEvening';

export default {
  data() {
    return {
      comp: GoodMorning,
    };
  },
  methods: {
    toggle() {
      if (this.comp === GoodMorning) {
        this.comp = GoodEvening;
      } else {
        this.comp = GoodMorning;
      }
    },
  },
};
</script>

<style></style>
