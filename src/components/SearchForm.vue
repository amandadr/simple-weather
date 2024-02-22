<template>
  <form @submit.prevent="submitSearch">
    <input type="text" v-model="searchQuery" placeholder="Enter a city" />
    <button type="submit">Search</button>
  </form>
</template>

<script>
export default {
  name: "SearchForm",
  data() {
    return {
      searchQuery: "",
    };
  },
  methods: {
    submitSearch() {
      if (this.searchQuery) {
        this.$emit("search", this.searchQuery);
        this.searchQuery = ""; // Reset input
      }
    },
  },
};
</script>
