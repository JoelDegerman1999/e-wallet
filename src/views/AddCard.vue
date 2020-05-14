<template>
  <div class="addcard">
    <app-top headerTitle="ADD A NEW BANK CARD" />
    <app-card :card="placeholderCard" cardTitle="NEW CARD" :addCard="true" />
    <app-card-form @addCard="addCard" :card="placeholderCard" />
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
    appCardForm: CardForm,
  },
  methods: {
    addCard(newCard) {
      newCard.id = this.$root.newId;
      this.cardArray.push(newCard);
      this.$root.newIdCounter();
      this.$router.push("/");
    },
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
        color: "",
        blipDark: false,
      },
    };
  },
  beforeMount() {
    this.cardArray = this.$root.cardArray;
  },
};
</script>

<style lang="scss" scoped></style>
