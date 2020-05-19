<template>
  <section class="form">
    <form @submit="checkForm">
      <p v-if="errors.length">
        <b>Please correct the following error(s):</b>
       <ul>
        <li v-for="(error, index) in errors" :key="index">{{error}}</li>
      </ul>
      </p>
      <div class="cardnumber flex">
        <label>CARD NUMBER</label>
        <input type="text" v-model="formCard.cardNumber" @change="updateCardNumber" />
      </div>
      <div class="cardholder flex">
        <label>CARDHOLDER NAME</label>
        <input type="text" v-model="formCard.name" @change="updateCardName" />
      </div>
      <div class="valid-and-ccv">
        <div class="valid">
          <label>VALID THRU</label>
          <input type="text" v-model="formCard.valid" @change="updateCardValid" />
        </div>
        <div class="ccv">
          <label>CCV</label>
          <input type="text" />
        </div>
      </div>
      <div class="vendor flex">
        <label>VENDOR</label>
        <select name="vendors" id="vendors" v-model="vendor" @change="updateVendor">
          <option value="bitcoin">Bitcoin</option>
          <option value="blockchain">Blockchain</option>
          <option value="evil">Evil Corp</option>
          <option value="ninja">Ninja Corp</option>
        </select>
      </div>
      <button type="submit">Add Card</button>
    </form>
  </section>
</template>

<script>
export default {
  props: {
    card: Object
  },
  data() {
    return {
      newCard: this.card,
      formCard: {
        cardNumber: "",
        name: "",
        valid: ""
      },
      vendor: "bitcoin",
      errors: []
    };
  },
  methods: {
    updateVendor() {
      this.newCard.vendor = this.vendor;
    },
    updateCardNumber() {
      this.newCard.cardNumber = this.formCard.cardNumber;
    },
    updateCardName() {
      this.newCard.name = this.formCard.name;
    },
    updateCardValid() {
      this.newCard.valid = this.formCard.valid;
    },
    addCard() {
      if (this.$root.cardArray.length == 8) {
        alert("Maximum cards allowed, please remove one");
        return;
      }
      this.$emit("addCard", this.newCard);
    },
    checkForm(e) {
      if (
        this.formCard.cardNumber &&
        this.formCard.name &&
        this.formCard.valid
      ) {
        this.addCard()
        return true;
      }

      this.errors = [];

      if (!this.formCard.cardNumber) {
        this.errors.push("Card number required");
      }
      if (!this.formCard.name) {
        this.errors.push("Name required");
      }
      if (!this.formCard.valid) {
        this.errors.push("Valid date required");
      }

      e.preventDefault();
    }
  },
  computed: {}
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
