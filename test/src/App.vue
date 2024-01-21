<template>
  <div>
    <!-- <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <div>
      <label>保戶編號</label>
      <input v-model="code_click" />
      <button type="button" @click="getData">查詢</button>
      <template v-if="main_data">
        <div class="main">
          <div class="main-people">
            {{ code_click }}<br />{{ main_data.name }}
          </div>
        </div>
        <div class="tree">
          <div class="row">
            <Tree
              :data="main_data.l"
              :code="main_data.code"
              :code_click="code_click"
            />
          </div>
          <div class="row">
            <Tree
              :data="main_data.r"
              :code="main_data.code"
              :code_click="code_click"
            />
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script>
import axios from "axios";
import "./mock";
import Tree from "./tree.vue";

export default {
  name: "app",
  components: {
    Tree,
  },
  data() {
    return {
      code: "",
      code_click: 1,
      main_data: null,
    };
  },
  mounted() {
    // console.log("mounted");
    this.getData();
    this.$EventBus.$on("msg", (data) => {
      this.code_click = Number(data);
      console.log(data);
    });
  },
  beforeDestroy() {
    this.$EventBus.$off("msg");
  },
  methods: {
    getData() {
      axios
        .get("/api/policyholders")
        .then((response) => (this.main_data = response.data))
        .catch(function (err) {
          console.log(err);
        });
    },
    find() {
      axios
        .get("/api/policyholders")
        .then((response) => (this.main_data = response.data))
        .catch(function (err) {
          console.log(err);
        });
    },
  },
};
</script>

<style>
.main {
  margin-top: 20px;
  width: 100%;
  justify-content: center;
  display: flex;
}

.tree {
  display: flex;
}

.row {
  width: 100%;
  min-width: 50%;
  justify-content: center;
  display: flex;
}

.main-people {
  width: 80px;
  margin: 10px;
  border-radius: 6px;
  background-color: #ffdd00;
  text-align: center;
}
</style>
