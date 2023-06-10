import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";
import { Rons } from "./Rons.js";

const Card = {
  props: {
    titulo: String,
    id: Number,
    img: String,
    valor: Number,
  },

  template: `
        <div class="central" align="center">
            <div class="caja">
            <img class="imagen" :src="img" :alt="titulo">
                <p>{{id}}</p>
                <h3>{{titulo}}</h3>
                <p>$ {{valor}}</p>
                <button>Comprar</button>
            </div>
        </div>
    `,
};

//  app Vue

createApp({
  components: {
    "card-component": Card,
  },

  data() {
    return {
      rons: Rons,
    };
  },
}).mount("#app");
