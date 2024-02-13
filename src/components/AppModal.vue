<script>
import { store } from "../store.js";

export default {
  data() {
    return {
      store,
      infoIncluded: ["brand", "title", "originalPrice", "finalPrice", "tag", "genre"],
      mainImg: store.modal.product.frontImg,
    };
  },

  computed: {
    discount() {
      return (1 - this.prod.finalPrice / this.prod.originalPrice) * 100;
    },

    prod() {
      return store.modal.product;
    },
  },

  methods: {
    closeModal() {
      store.modal.show = false;
    },

    getUrlImg(img) {
      const imgUrl = new URL("../assets/img/" + img, import.meta.url);
      return imgUrl.href;
    },

    clickedOutside(event) {
      if (event.target.classList.contains("layover")) this.closeModal();
    },
  },
};
</script>
<template>
  <div class="layover" @click="clickedOutside($event)">
    <div class="modal">
      <div class="ribbon padded">
        <h3>{{ prod.title }}</h3>
        <font-awesome-icon class="icon" :icon="['fas', 'square-xmark']" @click="closeModal()" />
      </div>
      <div class="body padded">
        <img :src="getUrlImg(mainImg)" alt="" />
        <div class="prod-info">
          <p v-for="key in Object.keys(prod)" v-show="infoIncluded.includes(key) && prod[key]">
            <strong>{{ `${key}: ` }}</strong>
            <span :class="key == 'originalPrice' ? 'line-through' : ''">{{ prod[key] }}</span>
          </p>
          <p class="discount" v-show="discount.toFixed(0) != 0">
            <strong>Discount: </strong>
            <span>{{ discount.toFixed(0) }}%</span>
          </p>
        </div>
      </div>
      <div class="footer padded">
        <img v-if="prod.frontImg" :src="getUrlImg(prod.frontImg)" alt="" @click="mainImg = store.modal.product.frontImg" />
        <img v-if="prod.backImg" :src="getUrlImg(prod.backImg)" alt="" @click="mainImg = store.modal.product.backImg" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/css/partials/mixins" as *;

.padded {
  padding: 10px 20px;
}
.modal {
  background-color: white;
  color: black;

  border-radius: 10px;
  overflow: hidden;
  .ribbon {
    @include space-between;
    align-items: center;
    border-bottom: 1px solid white;
    background-color: rgb(71, 115, 247);
    color: white;

    .icon {
      font-size: 1.8rem;
      cursor: pointer;
    }
  }

  .body {
    display: flex;
    gap: 20px;
    align-items: center;

    img {
      max-height: 300px;
    }

    p {
      margin-bottom: 5px;
    }

    .line-through {
      text-decoration: line-through;
    }

    .discount {
      color: red;
    }
  }

  .footer {
    img {
      height: 100px;
      margin-right: 10px;
      cursor: pointer;
    }
  }
}
</style>
