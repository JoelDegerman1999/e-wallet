<template>
  <section class="form">
    <div class="cardnumber flex">
      <label>CARD NUMBER</label>
      <input type="text" v-model="newCard.cardNumber" />
    </div>
    <div class="cardholder flex">
      <label>CARDHOLDER NAME</label>
      <input type="text" v-model="newCard.name" />
    </div>
    <div class="valid-and-ccv">
      <div class="valid">
        <label>VALID THRU</label>
        <input type="text" v-model="newCard.valid" />
      </div>
      <div class="ccv">
        <label>CCV</label>
        <input type="text" />
      </div>
    </div>
    <div class="vendor flex">
      <label>VENDOR</label>
      <select name="vendors" id="vendors" v-model="vendor" @change="changeVendor">
        <option value="bitcoin">Bitcoin</option>
        <option value="blockchain">Blockchain</option>
        <option value="evil">Evil Corp</option>
        <option value="ninja">Ninja Corp</option>
      </select>
    </div>
    <button @click="addCard">Create Card</button>
  </section>
</template>

<script>
export default {
  props: {
    card: Object,
  },
  data() {
    return {
      newCard: this.card,
      vendor: "blockchain",
    };
  },
  methods: {
    changeVendor() {
      this.newCard.vendor = this.vendor
    },
    addCard() {
      if (this.$root.cardArray.length == 8) {
        alert("Maximum cards allowed, please remove one");
        return;
      }
      this.newCard.vendor = this.vendor
      this.$emit("addCard", this.newCard);
    },
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
input {
  box-sizing: border-box;
}
.form {
  margin-top: 2rem;

  button {
    margin-top: 2rem;
    width: 100%;
    height: 6rem;
    border: 1px solid black;
    background: rgb(240, 240, 240);
    font-weight: 700;
    border-radius: 7px;
  }

  .flex {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    input {
      width: 100%;
      height: 2rem;
      background: rgb(240, 240, 240);
      border: 1px solid black;
      border-radius: 5px;
      margin-bottom: 0.6rem;
    }
  }
  .valid-and-ccv {
    display: flex;
    .valid {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      input {
        width: 90%;
        height: 2rem;
        background: rgb(240, 240, 240);
        border: 1px solid black;
        border-radius: 5px;
      }
    }
    .ccv {
      width: 90%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      input {
        width: 100%;
        height: 2rem;
        background: rgb(240, 240, 240);
        border: 1px solid black;
        border-radius: 5px;
      }
    }
    margin-bottom: 0.6rem;
  }
  .vendor {
    select {
      background: rgb(240, 240, 240);
      border: 1px solid black;
      height: 2rem;
      border-radius: 5px;
      width: 100%;
    }
  }
}
</style>
