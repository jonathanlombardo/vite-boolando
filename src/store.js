import { reactive } from "vue";

export const store = reactive({
  products: [],
  company: {},
  aboutLinks: [],
  categories: [],
  sections: [],
});

export const apiURI = "http://localhost:3000";
