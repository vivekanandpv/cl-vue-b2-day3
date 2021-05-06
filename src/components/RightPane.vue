<template>
  <div class="card">
    <div class="card-body">
      <h3>Right Pane</h3>
      <p>
        First Name: {{ person.firstName }}; Last Name: {{ person.lastName }}
      </p>
      <hr />
      <div class="form-group">
        <label>New first name</label>
        <input type="text" class="form-control" v-model="firstName" />
      </div>

      <button type="button" class="btn btn-primary" @click="update">
        Update First Name
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: "",
    };
  },
  computed: {
    person() {
      return this.$store.state.person;
    },
  },
  methods: {
    update() {
      this.$store.dispatch("changeFirstNameAsync", this.firstName);
    },
  },
};
</script>

<style>
</style>