<script>
import { store } from "../store.js";

export default {
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="layover">
    <h3>{{ store.loader.message || "Loading..." }}</h3>
    <font-awesome-icon class="icon" :icon="['fas', 'spinner']" spin />
  </div>
</template>

<style lang="scss" scoped>
.layover {
  flex-direction: column;
  font-size: 1.5rem;
  .icon {
    font-size: 3rem;
  }
}
</style>
