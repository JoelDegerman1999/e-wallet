<template>
  <section class="active-card-sect">
    <div class="title-and-delete" v-if="cardTitle && deleteBtn">
      <h6>{{ cardTitle }}</h6>
      <button class="deleteBtn" @click="deleteCard(card)">Delete</button>
    </div>
    <article
      class="active-card"
      :style="{ backgroundColor: card.color }"
      :class="{ dark: card.blipDark, hoverEffect: inCardStack }"
    >
      <div class="chip-and-vendor">
        <img src="@/assets/chip-dark.svg" v-if="!card.blipDark" />
        <img src="@/assets/chip-light.svg" v-else />
        <img src="@/assets/vendor-bitcoin.svg" v-if="card.vendor == 'bitcoin'" />
        <img src="@/assets/vendor-blockchain.svg" v-if="card.vendor == 'blockchain'" />
        <img src="@/assets/vendor-evil.svg" v-if="card.vendor == 'evil'" />
        <img src="@/assets/vendor-ninja.svg" v-if="card.vendor == 'ninja'" />
      </div>
      <div class="cardnumber">
        <p>{{ card.cardNumber }}</p>
      </div>
      <div class="cardinfo">
        <div class="cardholder">
          <label>CARDHOLDER NAME</label>
          <h4>{{ card.name }}</h4>
        </div>
        <div class="valid">
          <label>VALID THRU</label>
          <h4>{{ card.valid }}</h4>
        </div>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  props: {
    cardTitle: String,
    card: Object,
    deleteBtn: Boolean,
    inCardStack: Boolean
  },
  data() {
    return {};
  },
  methods: {
    deleteCard(card) {
      this.$emit("deleteCard", card)
    }
  },
  computed: {}
};
</script>

<style lang="scss" scoped>
h6 {
  font-weight: 400;
}

.hoverEffect {
  &:hover {
    border: 3px solid white;
  }
}

.dark {
  color: white;
}

  .title-and-delete{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-bottom: 0.5rem;
    button {
      outline: none;
      cursor: pointer;
      grid-column: 3/4;
      border: 1px solid black;
      background: #ffb443;
      width: 5rem;
      height: 1.5rem;
      border-radius: 8px;
    }
    h6 {
      margin: auto;
      grid-column: 2/3;
    }
  }
.active-card {
  box-sizing: border-box;
  padding: 1rem;
  background-color: #ffb443;
  border-radius: 8px;
  margin: 0 auto;
  box-shadow: 3px 3px 8px 0 rgba(0, 0, 0, 0.4);

  transition: .3s all ease;
  .chip-and-vendor {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  .cardnumber {
    p {
      font-size: 1.5rem;
      font-weight: 500;
    }
    margin: 0.5rem 0 1rem 0;
  }
  .cardinfo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    label {
      font-size: 0.7rem;
      margin-bottom: 0.2rem;
    }
    h4 {
      font-size: 0.9rem;
    }
    .cardholder {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
    .valid {
      display: flex;
      flex-direction: column;

      h4 {
        font-weight: 500;
      }
    }
  }
}
</style>
