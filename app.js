import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";
import { Rons } from "./Rons.js";
const Table = {
  props: {
    data: {
      type: Array,
    },
    tableClass: {
      type: String,
    },
  },
  template: `
        <table :class="tableClass">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Img</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in data" :key="item.id">
              <td>{{ item.id }}</td>
              <td>{{ item.titulo }}</td>
              <td>{{ item.valor }}</td>
              <td>
              <img :src=item.img  :alt=item.titulo>
              </td>
            </tr>
          </tbody>
        </table>
      `,
};
const app = createApp({
  components: {
    tablita: Table,
  },
  data() {
    return {
      rons: Rons,
    };
  },
});
app.mount("#app");
