<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  data() {
    return {
      // ... mydata
    };
  },

  methods: {
    // ... mymethods
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
  <app-footer />
</template>

<style lang="scss">
@use "./assets/css/global.scss";
</style>
