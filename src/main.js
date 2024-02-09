import { createApp } from "vue";
import App from "./App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { faUser as faUserReg, faHeart as faHeartReg, faSquare as faSquareReg } from "@fortawesome/free-regular-svg-icons";
import { faUser as faUserSol, faHeart as faHeartSol, faSquare as faSquareSol } from "@fortawesome/free-solid-svg-icons";
import { faSquareTwitter, faSquareFacebook, faSquareInstagram, faSquarePinterest, faSquareYoutube } from "@fortawesome/free-brands-svg-icons";

library.add(faUserReg, faHeartReg, faSquareReg, faUserSol, faHeartSol, faSquareSol, faSquareTwitter, faSquareFacebook, faSquareInstagram, faSquarePinterest, faSquareYoutube);

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
