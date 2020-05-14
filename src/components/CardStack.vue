<template>
  <section>
    <app-card :card="card"/>
  </section>
</template>

<script>
import Card from './Card'

export default {
  props: {
    cardArray: Array
  },
  components: {
    appCard: Card
  },
  data() {
    return {};
  },
  methods: {},
  computed: {}
};
</script>

<style lang="scss" scoped>
section {
  width: 100%;
  height: 50px;
  &:first-child {
    position: relative;
    top: 1%;
  }
  &:nth-child(2){
    position: relative;
    bottom: 24%;
  }
  &:last-child {
    position: relative;
    bottom: 49%;
  }
}
</style>