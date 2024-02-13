<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";
import AppAlert from "./components/AppAlert.vue";
import AppModal from "./components/AppModal.vue";

import axios from "axios";
import { store, apiURI } from "./store.js";

export default {
  data() {
    return {
      store,
    };
  },

  components: {
    AppHeader,
    AppMain,
    AppFooter,
    AppAlert,
    AppModal,
  },

  methods: {
    handleShowDetails(prod) {
      store.modal.product = prod;
      store.modal.show = true;
    },
  },

  created() {
    const uris = [
      {
        uri: `${apiURI}/products`,
        objToFillKey: "products",
      },
      {
        uri: `${apiURI}/categories`,
        objToFillKey: "categories",
      },
      {
        uri: `${apiURI}/sections`,
        objToFillKey: "sections",
      },
      {
        uri: `${apiURI}/company`,
        objToFillKey: "company",
      },
      {
        uri: `${apiURI}/aboutLinks`,
        objToFillKey: "aboutLinks",
      },
    ];

    const requests = uris.map((uri) => axios.get(uri.uri));

    store.loader.show = true;
    axios
      .all(requests)
      .then((responses) => {
        responses.forEach((resp, index) => {
          const objToFill = uris[index].objToFillKey;
          store[objToFill] = resp.data;
        });

        const man = store.products.filter((prod) => prod.genre == "man");
        const woman = store.products.filter((prod) => prod.genre == "woman");
        const kids = store.products.filter((prod) => prod.genre == "kids");

        for (let cat of store.categories) {
          if (!man.length && cat.name == "Uomo") cat.isEmpty = true;
          if (!woman.length && cat.name == "Donna") cat.isEmpty = true;
          if (!kids.length && cat.name == "Bambino") cat.isEmpty = true;
        }
      })
      .catch((err) => {
        store.alert.message = err.message;
        store.alert.class = "danger";
        store.alert.show = true;
      })
      .finally(() => (store.loader.show = false));
  },
};
</script>

<template>
  <app-loader v-if="store.loader.show" />
  <app-modal v-if="store.modal.show" />
  <app-header />
  <app-alert v-if="store.alert.show" />
  <app-main @show-details="handleShowDetails" />
  <app-footer />
</template>

<style lang="scss">
@use "./assets/css/global.scss";
</style>
