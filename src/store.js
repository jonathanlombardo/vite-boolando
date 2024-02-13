import { reactive } from "vue";

export const store = reactive({
  products: [],
  company: {},
  aboutLinks: [],
  categories: [],
  sections: [],

  loader: {
    show: false,
    message: "",
  },

  alert: {
    show: false,
    message: "",
    class: "",
  },

  modal: {
    product: {},
    show: false,
  },
});

export const apiURI = "http://localhost:3000";
