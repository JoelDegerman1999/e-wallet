<template>
  <div class="home">
    <app-top headerTitle="E-WALLET" class="top" />
    <app-card v-if="cardThatIsActive != null"
      cardTitle="ACTIVE-CARD"
      deleteBtn
      :card="cardThatIsActive"
      @deleteCard="deleteCard"
      class="card"
    />
    <app-card-stack :cardArray="cardArray" @changeActiveCard="changeActiveCard" class="card-stack"/>
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
      cardArray: []
    };
  },
  beforeMount() {
    this.cardArray = this.$root.cardArray;
  },
  methods: {
    gotoAddCard() {
      this.$root.cardArray = this.cardArray
      this.$router.push("/addcard");
    },
    changeActiveCard(cardId) {
      this.cardArray.map(card => {
        if (card.id != cardId) {
          card.isActive = false;
        } else {
          card.isActive = true;
        }
      });
    },
    deleteCard(card) {
      this.cardArray = this.cardArray.filter(c => c.id != card.id);
      if (this.cardArray.length > 0) {
        this.cardArray[0].isActive = true;
      } 
    }
  },
  computed: {
    cardThatIsActive() {
      let activeCard;
      if (this.cardArray.length > 0) {
        this.cardArray.map(card => {
          if (card.isActive) activeCard = card;
        });
      }
      return activeCard;
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
    width: 100%;
    height: 6rem;
    border: 1px solid black;
    background: rgb(240, 240, 240);
    font-weight: 700;
    border-radius: 7px;
  }
}

@media screen and (min-width: 768px) {
  .card {
    width: 21rem;
  }
  .card-stack {
    width: 21rem;
  }
  button {
    max-width: 21rem;
  }
  .top {
    width: 21rem;
  }

  .home {
    align-items: center;
  }
}
</style>
