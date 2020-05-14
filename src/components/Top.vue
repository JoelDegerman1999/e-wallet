<template>
  <header>
    <h1> {{ headerTitle }} </h1>
  </header>
</template>

<script>
export default {
  props: {
      headerTitle: String
  },
  data() {
    return {};
  },
  methods: {},
  computed: {}
};
</script>

<style lang="scss" scoped>
header {
  margin: 1rem 0 2rem 0;
  h1 {
    width: 70%;
    margin: 0 auto;
  }
}
</style>