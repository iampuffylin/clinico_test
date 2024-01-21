<template>
  <div class="row">
    <div v-for="i in data" :key="code_click - 1 + Number(i.code)">
      <div class="row">
        <div
          class="people"
          :class="{ 'people-dir': i.introducer_code == code }"
          @click.stop="clickFind(code_click - 1 + Number(i.code))"
        >
          {{ code_click - 1 + Number(i.code) }}<br />{{ name }}
        </div>
      </div>
      <div class="tree">
        <div class="row">
          <Tree-2 :data="i.l" :code="i.code" :code_click="code_click" />
        </div>
        <div class="row">
          <Tree-2 :data="i.r" :code="i.code" :code_click="code_click" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tree-2",
  components: {},
  props: {
    code: String,
    code_click: Number,
    data: [],
  },
  data() {
    return {
      name: "",
    };
  },
  mounted() {
    this.name = this.generateRandomString();
  },
  methods: {
    clickFind(code) {
      //   console.log(code);
      //   this.$emit("find");
      this.$EventBus.$emit("msg", code);
    },

    generateRandomString() {
      var names = [
        "Setlla Childe",
        "Quentin Roland",
        "Aurora Becher",
        "Gabriel Malan",
        "Renee Leighton",
        "Horace Ulysses",
        "Samuel Whitman",
        "Miles Clemens",
        "Alan Nell",
        "Adam Lucy",
        "Byron Robeson",
        "Eden Edmund",
        "Andy Harrod",
        "Mona Nelson",
        "Marian Marcus",
        "Suzanne Adam",
        "Carol Zangwill",
        "Merlin Harvey",
        "Audrey Louis",
        "Geoffrey Max",
        "Madeline Wyld",
        "Werner Hansen",
        "Ives Faraday",
        "Maxine Horace",
      ];
      var randomIndex = Math.floor(Math.random() * names.length);
      var randomName = names[randomIndex];
      return randomName;
    },
  },
};
</script>

<style>
.tree {
  display: flex;
}

.row {
  width: 100%;
  min-width: 50%;
  margin-top: 10px;
  justify-content: center;
  display: flex;
}

.people {
  width: 80px;
  height: 60px;
  margin: 10px;
  border-radius: 6px;
  background-color: #eeeeee;
  text-align: center;
  cursor: pointer;
}

.people:first-child {
  margin-right: 10px;
}

.people-dir {
  background-color: #52e396;
}
</style>
