<template>
  <div class="card">
    <div class="card-body">
      <h3>Right Pane</h3>
      <hr />
      <button type="button" class="btn btn-primary" @click="like">
        Likes
        <span class="badge badge-light">{{ nLikes }}</span>
      </button>
      <button type="button" class="btn btn-primary ml-4" @click="dislike">
        Dislikes
        <span class="badge badge-light">{{ nDislikes }}</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    nLikes() {
      return this.$store.state.likes;
    },
    nDislikes() {
      return this.$store.state.dislikes;
    },
  },
  methods: {
    //  it's like working with a service as in Spring

    like() {
      this.$store.dispatch("likeAsync", 3);
    },
    dislike() {
      this.$store.dispatch("dislikeAsync", 5);
    },
  },
};
</script>

<style>
</style>