<script>
export default {
  props: {
    href: {
      type: String,
      default: "#",
    },
  },
};
</script>

<template>
  <a :href="href">
    <img src="/boolean-logo.png" alt="" />
  </a>
</template>

<style lang="scss" scoped>
img {
  max-height: 100%;
  max-width: 100%;
}
</style>
