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
  <footer>
    <div class="container">
      <div class="info-wrapper">
        <div class="company">{{ store.company.name }}</div>
        <ul>
          <li v-for="link in store.aboutLinks">
            <a :href="link.link">
              {{ link.name }}
            </a>
          </li>
        </ul>
      </div>
      <div class="social-wrapper">
        <p>Trovaci anche su:</p>
        <a v-for="social in store.company.social" :href="social.link">
          <font-awesome-icon class="icon" :icon="['fab', social.iconClass]" />
        </a>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use "../assets/css/partials/mixins" as *;

footer {
  background-color: black;
  color: white;

  a {
    text-decoration: none;
    color: inherit;

    .icon {
      display: inline-block;
      margin: 5px 5px;
      font-size: 1.3rem;
    }
  }
  .container {
    height: 90px;
    @include space-between();
    align-items: center;
  }

  .company {
    margin-bottom: 5px;
    font-weight: bold;
    font-size: 1.2rem;
  }

  li {
    display: inline-block;
    margin-right: 5px;
    &::after {
      content: " |";
    }
    &:last-child::after {
      content: "";
    }
  }
}
</style>
