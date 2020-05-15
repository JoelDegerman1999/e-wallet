<template>
  <div class="home">
    <app-top headerTitle="E-WALLET" />
    <app-card cardTitle="ACTIVE-CARD" :card="cardThatIsActive" />
    <app-card-stack
      :cardArray="cardArray"
      @changeActiveCard="changeActiveCard"
    />
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
    appCardStack: CardStack,
  },
  data() {
    return {
      cardArray: [],
    };
  },
  beforeMount() {
    this.cardArray = this.$root.cardArray;
  },
  methods: {
    gotoAddCard() {
      this.$router.push("/addcard");
    },
    changeActiveCard(cardId) {
      this.cardArray.map((card) => {
        if (card.id != cardId) {
          card.isActive = false;
        } else {
          card.isActive = true;
        }
      });
    },
  },
  computed: {
    cardThatIsActive() {
      let activeCard;
      this.cardArray.map((card) => {
        if (card.isActive) activeCard = card;
      });
      return activeCard;
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  height: 100%;
  display: flex;
  flex-direction: column;
  button {
    width: 100%;
    height: 6rem;
    border: 1px solid black;
    background: rgb(240, 240, 240);
    font-weight: 700;
    border-radius: 7px;
  }
}
</style>
