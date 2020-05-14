<template>
  <section class="form">
    <div class="cardnumber flex">
      <label>CARD NUMBER</label>
      <input type="text" />
    </div>
    <div class="cardholder flex">
      <label>CARDHOLDER NAME</label>
      <input type="text" />
    </div>
    <div class="valid-and-ccv">
      <div class="valid">
        <label>VALID THRU</label>
        <input type="text" />
      </div>
      <div class="ccv">
        <label>CCV</label>
        <input type="text" />
      </div>
    </div>
    <div class="vendor flex">
      <label>VENDOR</label>
      <select name="vendors" id="vendors">
        <option value="bitcoin">Bitcoin</option>
        <option value="blockchain">Blockchain</option>
        <option value="evil">Evil Corp</option>
        <option value="ninja">Ninja Corp</option>
      </select>
    </div>
  </section>
</template>

<script>
export default {
  props: {},
  data() {
    return {};
  },
  methods: {},
  computed: {}
};
</script>

<style lang="scss" scoped>
input {
  box-sizing: border-box;
}
.form {
  margin-top: 2rem;
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