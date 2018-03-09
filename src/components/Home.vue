<template>
  <div>
    <div class="hello">
      <v-layout>
        <v-flex xs2>
          <h1>Heilys</h1>
        </v-flex>
        <v-flex xs10 style="text-align: right; padding-right: 55px;">
          <v-icon large style="cursor: pointer" @click="openMenu">list</v-icon>
        </v-flex>
      </v-layout>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Тут будет главная'
    }
  },
  methods: {
    openMenu() {
      this.$router.push("/portfolio")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
