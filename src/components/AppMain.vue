<script>
import ProductCard from "./ProductCard.vue";
export default {
  props: {
    products: Array,
  },

  methods: {
    getUrlImg(img) {
      const imgUrl = new URL("../assets/img/" + img, import.meta.url);
      return imgUrl.href;
    },
  },

  components: { ProductCard },
};
</script>

<template>
  <main>
    <div class="container">
      <div class="row">
        <div v-for="(prod, index) in products" class="col">
          <product-card :title="prod.title" :frontImg="getUrlImg(`${index + 1}.webp`)" :backImg="getUrlImg(`${index + 1}b.webp`)" :brand="prod.brand" :oldPrice="prod.originalPrice" :finalPrice="prod.finalPrice" :tag="prod.tag" />
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.col {
  width: calc(100% / 3);
  // border: 1px solid black;
}
</style>
