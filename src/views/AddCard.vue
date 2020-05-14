<template>
  <div class="addcard">
    <app-top headerTitle="ADD A NEW BANK CARD"/>
    <app-card cardTitle="NEW CARD" />
    <app-card-form/>
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
}
</script>


<style lang="scss" scoped>

</style>