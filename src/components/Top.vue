<template>
  <header>
    <router-link to="/" v-if="addCard">BACK</router-link>
    <h1>{{ headerTitle }}</h1>
  </header>
</template>

<script>
export default {
  props: {
    headerTitle: String,
    addCard: Boolean,
  },
  data() {
    return {};
  },
  methods: {},
  computed: {},
};
</script>

<style lang="scss" scoped>
header {
  margin: 1rem 0 2rem 0;
  a {
    cursor: pointer;
    display: inline-block;
    position: absolute;
    top: 6%;
    left: 2%;
    text-decoration: none;
    color: black;
    font-weight: 700;
  }

  h1 {
    width: 70%;
    margin: 0 auto;
  }
}
</style>
