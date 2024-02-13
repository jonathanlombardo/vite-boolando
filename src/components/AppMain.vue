<script>
import ProductCard from "./ProductCard.vue";

import { store } from "../store.js";

export default {
  data() {
    return {
      store,
    };
  },

  emits: ["show-details"],

  methods: {
    toggleOnWish(prod) {
      prod.onWish = !prod.onWish;
    },

    showDetails(prod) {
      this.$emit("show-details", prod);
    },
  },

  components: { ProductCard },
};
</script>

<template>
  <main>
    <div class="container">
      <div class="row">
        <div v-for="prod in store.products" class="col">
          <product-card :prod="prod" @heart-click="toggleOnWish(prod)" @click="showDetails(prod)" />
        </div>
      </div>

      <!-- ********** -->
      <!-- <h1>Favourite</h1>
      <div class="row">
        <div v-for="prod in store.products" v-show="prod.onWish" class="col">
          <product-card :prod="prod" />
        </div>
      </div> -->
      <!-- ********** -->
    </div>
  </main>
</template>

<style lang="scss" scoped>
.col {
  width: calc(100% / 3);
  cursor: pointer;
}
</style>
