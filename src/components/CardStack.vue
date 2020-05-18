<template>
  <section class="container">
    <section class="cardstack-wrapper">
      <app-card
        @click.native="changeActiveCard(card.id)"
        v-for="card in cardNonActive"
        :key="card.id"
        :card="card"
        inCardStack
      >
      </app-card>
    </section>
  </section>
</template>

<script>
import Card from "./Card";

export default {
  props: {
    cardArray: Array,
  },
  components: {
    appCard: Card,
  },
  data() {
    return {};
  },
  methods: {
    changeActiveCard(cardId) {
      this.$emit("changeActiveCard", cardId);
    },
  },
  computed: {
    cardNonActive() {
      return this.cardArray.filter((card) => !card.isActive);
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  height: 35rem;
}

.cardstack-wrapper {
  margin-top: 1.5rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 50px;
}
</style>
