<script>
export default {
  props: {
    frontImg: URL,
    brand: String,
    title: String,
    oldPrice: Number,
    finalPrice: Number,
    tag: String,
  },
};
</script>

<template>
  <div class="card">
    <div class="card-image">
      <img :src="frontImg" :alt="title" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
