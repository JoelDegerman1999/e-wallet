<template>
  <div class="home">
    <app-top headerTitle="E-WALLET" />
    <app-card cardTitle="ACTIVE-CARD" :card="card" />
    <app-card-stack :card="cardArray" />
    <button @click="gotoAddCard">ADD A NEW CARD</button>
  </div>
</template>

<script>
import Top from "@/components/Top";
import Card from "@/components/Card";
import CardStack from "@/components/CardStack";

export default {
  name: "Home",
  components: {
    appTop: Top,
    appCard: Card,
    appCardStack: CardStack
  },
  data() {
    return {
      cardArray: [],
      card: {
        name: "JOEL DEGERMAN",
        valid: "04/21",
        cardNumber: "1223 5123 5344 3454"
      },
      card2: {
        name: "Lars DEGERMAN",
        valid: "04/21",
        cardNumber: "1223 5123 5344 3454"
      }
    };
  },
  beforeMount() {
    this.cardArray.push(this.card)
    this.cardArray.push(this.card2)
  },
  methods: {
    gotoAddCard() {
      this.$router.push("/addcard");
    }
  }
};
</script>


<style lang="scss" scoped>
.home {
  height: 100%;
  display: flex;
  flex-direction: column;
  button {
    margin: auto;
    margin-bottom: 1rem;
    width: 90%;
    height: 6rem;
    border: 1px solid black;
    background: rgb(240, 240, 240);
    font-weight: 700;
    border-radius: 7px;
  }
}
</style>