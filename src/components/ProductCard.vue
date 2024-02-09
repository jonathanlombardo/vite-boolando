<script>
export default {
  props: {
    frontImg: String,
    backImg: String,
    brand: String,
    title: String,
    oldPrice: Number,
    finalPrice: Number,
    tag: String,
    onWish: Boolean,
  },

  computed: {
    getDiscount() {
      return ((1 - this.finalPrice / this.oldPrice) * 100).toFixed(0);
    },

    noDiscount() {
      return this.getDiscount == 0;
    },
  },
};
</script>

<template>
  <div class="card">
    <div class="card-image">
      <img :src="frontImg" :alt="title" />
      <img class="back-img" :src="backImg" :alt="title + ' secondary'" />
    </div>
    <div class="brand mt mb">{{ brand }}</div>
    <div class="title mb">{{ title }}</div>
    <div class="price">€ {{ finalPrice.toFixed(2) }}</div>
    <div v-if="!noDiscount" class="old-price">€ {{ oldPrice.toFixed(2) }}</div>
    <div class="wish-wrapper" @click="onWish = !onWish">
      <font-awesome-icon :icon="[onWish ? 'fas' : 'far', 'heart']" />
    </div>
    <div class="tag-wrapper">
      <div v-if="!noDiscount" class="discount">{{ getDiscount }}%</div>
      <div v-if="tag" class="tag">{{ tag }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/css/partials/var" as *;

.mb {
  margin-bottom: 5px;
}

.mt {
  margin-top: 5px;
}

img {
  display: block;
}

.card {
  margin-bottom: $space-m;
  position: relative;
}

.brand {
  font-size: 0.9rem;
  font-style: italic;
}

.title {
  font-weight: bold;
}

.price,
.old-price {
  // font-size: 0.9rem;
  display: inline-block;
  margin-right: 8px;
}

.price {
  font-weight: bold;
  color: red;
}

.old-price {
  text-decoration: line-through;
  font-style: italic;
}

img.back-img {
  position: absolute;
  top: 0;
  opacity: 0;
  transition: 0.4s;

  &:hover {
    opacity: 1;
  }
}

.wish-wrapper {
  position: absolute;
  top: 8px;
  right: 0;

  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;

  background-color: white;
  font-size: 1.3rem;

  cursor: pointer;

  .fa-solid {
    color: red;
  }
}

.tag-wrapper {
  position: absolute;
  top: 84%;

  * {
    display: inline-block;
    margin-right: 5px;
    padding: 3px 8px;
    color: white;
    font-weight: bold;
  }

  .tag {
    background-color: green;
  }

  .discount {
    background-color: red;
  }
}
</style>
