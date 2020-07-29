<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">Vue.js Learning</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/" exact class="nav-link">
            <span>Home</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" exact class="nav-link">
            <span>About</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contact" exact class="nav-link">
            <span>Contact</span>
          </router-link>
        </li>
        <li class="nav-item">
          <!-- binding to router-link props dynamically -->
          <router-link :to="link" exact class="nav-link">
            <span>News</span>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data: function () {
    return {
      link: {
        //    refer to route config for named routes
        name: "news-with-city-year",
        params: {
          city: "Mumbai",
          year: 2019,
        },
        query: {
          section: "culture",
          order: "desc",
        },
      },
    };
  },
};
</script>

<style>
</style>