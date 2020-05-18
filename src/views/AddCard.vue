<template>
  <div class="addcard">
    <app-top headerTitle="ADD A NEW BANK CARD" addCard class="top" />
    <app-card :card="placeholderCard" cardTitle="NEW CARD" addCard class="card" />
    <app-card-form @addCard="addCard" :card="placeholderCard" class="card-form" />
  </div>
</template>

<script>
import Top from "@/components/Top";
import Card from "@/components/Card";
import CardForm from "@/components/CardForm";
export default {
  components: {
    appTop: Top,
    appCard: Card,
    appCardForm: CardForm
  },
  methods: {
    addCard(newCard) {
      newCard.id = this.$root.newId;
      this.cardArray.push(newCard);
      this.$root.newIdCounter();
      this.$router.push("/");
    }
  },
  data() {
    return {
      cardArray: [],
      placeholderCard: {
        id: 0,
        name: "FIRSTNAME LASTNAME",
        valid: "XX/XX",
        cardNumber: "XXXX XXXX XXXX XXXX",
        isActive: false,
        color: "#999",
        blipDark: false,
        vendor: "bitcoin"
      }
    };
  },
  beforeMount() {
    this.cardArray = this.$root.cardArray;
  }
};
</script>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .addcard {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .card {
    width: 21rem;
  }
  .card-form {
    width: 21rem;
  }
  button {
    max-width: 21rem;
  }
  .top {
    width: 21rem;
  }
}
</style>
