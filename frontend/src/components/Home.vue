<template>
  <div>
    <div class="centered">
      <div class="in-progress">
        <div class="links">
          <a href="https://www.flickr.com/photos/sroslyakova/">
            <img src="/static/flickr.svg" alt="flickr">
          </a>
          <a href="https://www.instagram.com/heilys.space/">
            <img src="/static/instagram.svg" alt="instagram">
          </a>
          <a href="https://www.behance.net/sroslyakova">
            <img src="/static/behance.svg" alt="behance">
          </a>
          <a href="https://dribbble.com/sroslyakova">
            <img src="/static/dribbble.svg" alt="dribbble">
          </a>
          <a href="https://vimeo.com/sroslyakova">
            <img src="/static/vimeo.svg" alt="vimeo" style="margin-right: 0">
          </a>
        </div>
        <div><span>Сайт в разработке...</span></div>
        <div class="mail-descriptor"><span>Пишите письма на heilys@ya.ru</span></div>

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
    font-size: 1.5rem;
    font-family: "Montserrat", sans-serif;
    font-style: normal;
  }

  .in-progress .links img {
    width: 100px;
    height: 100px;
    margin-right: 30px;
    margin-top: 4vh;
    margin-bottom: 3vh;
  }

  .mail-descriptor {
    margin-top: 5px;
  }
</style>
