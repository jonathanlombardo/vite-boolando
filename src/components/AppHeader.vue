<script>
import BooleanLogo from "./BooleanLogo.vue";
import sections from "../assets/js/_sectionData.js";
import categories from "../assets/js/_catData.js";

export default {
  data() {
    return {
      categories,
      sections,

      activeCatIndex: 0,
      activeSecIndex: 0,
    };
  },

  computed: {
    // activeCat() {
    //   return categories[this.activeCatIndex];
    // },
  },

  methods: {
    catClickHandler(index) {
      this.categories[this.activeCatIndex].active = false;
      this.activeCatIndex = index;
      this.categories[this.activeCatIndex].active = true;
    },

    secClickHandler(index) {
      this.sections[this.activeSecIndex].active = false;
      this.activeSecIndex = index;
      this.sections[this.activeSecIndex].active = true;
    },
  },

  components: { BooleanLogo },
};
</script>

<template>
  <header>
    <div class="container">
      <ul>
        <li v-for="(cat, index) in categories" :class="cat.active ? 'active' : ''" @click="catClickHandler(index)">
          {{ cat.name }}
        </li>
      </ul>

      <boolean-logo class="logo" />

      <ul>
        <li v-for="(sec, index) in sections">
          <i :class="[sec.active ? 'fa-solid' : 'fa-regular', sec.class]" @click="secClickHandler(index)"></i>
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

  position: sticky;
  top: 0;
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
    }
  }
}

.logo {
  height: 50%;
}
</style>
