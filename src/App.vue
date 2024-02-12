<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";

import sections from "./assets/js/_sectionData.js";
import categories from "./assets/js/_catData.js";
import products from "./assets/js/_prodData.js";
import { company, aboutLinks } from "./assets/js/_aboutData.js";

export default {
  data() {
    return {
      categories,
      sections,
      products,
      company,
      aboutLinks,
    };
  },

  components: {
    AppHeader,
    AppMain,
    AppFooter,
  },
};
</script>

<template>
  <app-header />
  <app-main />
  <app-footer :company="company" :aboutLinks="aboutLinks" />
</template>

<style lang="scss">
@use "./assets/css/global.scss";
</style>
