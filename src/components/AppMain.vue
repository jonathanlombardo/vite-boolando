<script>
import ProductCard from "./ProductCard.vue";

import axios from "axios";
import { store, apiURI } from "../store.js";

export default {
  data() {
    return {
      store,
    };
  },

  methods: {
    toggleOnWish(prod) {
      prod.onWish = !prod.onWish;
    },
  },

  components: { ProductCard },

  created() {
    axios.get(`${apiURI}/products`).then((response) => {
      store.products = response.data;
    });
  },
};
</script>

<template>
  <main>
    <div class="container">
      <div class="row">
        <div v-for="prod in store.products" class="col">
          <product-card :prod="prod" @heart-click="toggleOnWish(prod)" />
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
  // border: 1px solid black;
}
</style>
