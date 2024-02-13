<script>
import { store } from "../store.js";

export default {
  data() {
    return {
      store,
    };
  },

  methods: {
    closeAlert() {
      store.alert.show = false;
    },
  },
};
</script>
<template>
  <div class="container">
    <div class="alert" :class="store.alert.class ? store.alert.class : 'info'">
      <p>{{ store.alert.message || "notice" }}</p>
      <font-awesome-icon class="icon" :icon="['fas', 'square-xmark']" @click="closeAlert()" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/css/partials/mixins" as *;

.alert {
  @include space-between;
  padding: 20px 50px;
  font-size: 1.3rem;
  margin-bottom: 30px;

  &.info {
    background-color: aqua;
  }
  &.warning {
    background-color: yellow;
  }
  &.danger {
    background-color: red;
    color: white;
  }
  &.success {
    background-color: green;
  }
}

.icon {
  cursor: pointer;
}
</style>
