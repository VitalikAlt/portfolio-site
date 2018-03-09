<template>
  <div>
    <div class="centered">
      <div class="in-progress">
        <span>Сайт находится в разработке</span>
        <div class="links">
          <a href="https://www.instagram.com/heilys.space/">
            <img src="/static/instagram.svg" alt="image description">
          </a>
          <a href="https://dribbble.com/sroslyakova">
            <img src="/static/dribbble.svg" alt="image description">
          </a>
          <a href="https://www.behance.net/sroslyakova">
            <img src="/static/behance.svg" alt="image description">
          </a>
        </div>

      </div>
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
  .centered {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    overflow-y: hidden;
  }

  .in-progress {
    padding-bottom: 10vh;
  }

  .in-progress span {
    font-size: 3rem;
    font-family: "Montserrat", sans-serif;
    font-style: normal;
  }

  .in-progress .links img {
    width: 60px;
    height: 60px;
    margin-right: 15px;
    margin-top: 4vh;
  }
</style>
