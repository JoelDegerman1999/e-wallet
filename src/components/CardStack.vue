<template>
  <section>
    <app-card v-for="(card,index) in cardNonActive" :key="index" :card="card">
    </app-card>
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
  computed: {
    cardNonActive() {
      return this.cardArray.filter(card => !card.isActive)
    }
  }
};
</script>

<style lang="scss" scoped>
section {
}
</style>