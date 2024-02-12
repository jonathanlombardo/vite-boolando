<script>
import BooleanLogo from "./BooleanLogo.vue";
import { store } from "../store.js";

export default {
  data() {
    return {
      store,
      activeCatIndex: 0,
      activeSecIndex: 0,
    };
  },

  computed: {
    activeCat() {
      return store.categories[this.activeCatIndex];
    },

    activeSec() {
      return store.sections[this.activeSecIndex];
    },
  },

  methods: {
    catClickHandler(cat, index) {
      if (cat.isEmpty) return;
      this.activeCat.active = false;
      this.activeCatIndex = index;
      this.activeCat.active = true;
    },

    secClickHandler(index) {
      this.activeSec.active = false;
      this.activeSecIndex = index;
      this.activeSec.active = true;
    },
  },

  components: { BooleanLogo },
};
</script>

<template>
  <header>
    <div class="container">
      <ul>
        <li v-for="(cat, index) in store.categories" :class="{ active: cat.active, disable: cat.isEmpty }" @click="catClickHandler(cat, index)">
          {{ cat.name }}
        </li>
      </ul>

      <boolean-logo class="logo" />

      <ul>
        <li v-for="(sec, index) in store.sections">
          <font-awesome-icon :icon="[sec.active ? 'fa-solid' : 'fa-regular', sec.class]" @click="secClickHandler(index)" />
        </li>
      </ul>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use "../assets/css/partials/mixins" as *;
@use "../assets/css/partials/var" as *;

header {
  background-color: $primary-color;
  font-weight: bold;
  font-size: 1.2rem;
  color: white;
  height: $header-height;
  margin-bottom: $space-m;

  position: sticky;
  top: 0;
  z-index: 1;
}
.container {
  @include space-between();
  align-items: center;
  height: 100%;

  ul {
    @include flex-center(10px);
    height: 100%;

    li {
      cursor: pointer;
      height: 100%;
      line-height: $header-height;

      &.active {
        border-bottom: 5px solid white;
      }

      &.disable {
        cursor: auto;
        opacity: 0.5;
      }
    }
  }
}

.logo {
  height: 50%;
}
</style>
