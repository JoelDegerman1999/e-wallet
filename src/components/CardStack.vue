<template>
  <section>
    <app-card @click.native="changeActiveCard(card.id)" v-for="card in cardNonActive" :key="card.id" :card="card">
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
  methods: {
    changeActiveCard(cardId) {
      this.$emit("changeActiveCard", cardId)
    }
  },
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