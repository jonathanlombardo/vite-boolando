<script>
import products from "../assets/js/_prodData.js";
import ProductCard from "./ProductCard.vue";
export default {
  data() {
    return {
      products,
    };
  },

  methods: {
    getUrlImg() {
      // metodo per ottenere url img
    },
  },

  components: { ProductCard },
};
</script>

<template>
  <main>
    <div class="container">
      <div class="row">
        <div v-for="prod in products" class="col">
          <ProductCard :title="prod.title" :frontImg="getUrlImg()" />
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.col {
  width: calc(100% / 3);
  border: 1px solid black;
}
</style>
