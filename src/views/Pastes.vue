<template>
  <div class="container">
    <Title title="Vue Pastebin"/>
    <div id="nav">
      <router-link to="/">Create Another Paste</router-link>
    </div>
    <ul>
      <li v-for="(paste, index) of this.$store.getters.pastes" :key="paste.id">
        <div class="card">
          <Pastebox :code="paste[index].paste" :readonly="true" :language="paste[index].language" />
        </div>
      </li>
    </ul>
    <p class="credit">Created By <a target="_blank" href="https://github.com/Tlueders">Tanner Lueders</a></p>
  </div>
</template>

<script>
/* eslint-disable */
// @ is an alias to /src
import Title from '@/components/Title.vue'
import Pastebox from '@/components/Pastebox.vue'

export default {
  name: 'home',
  components: {
    Title,
    Pastebox
  },
  data() {
    return {
      pastes: []
    }
  },
  mounted() {
    let page_id = this.$route.params.id
    this.$store.dispatch('getPastes', page_id)
    console.log(this.$store.getters.pastes)
  }
}
</script>

<style>
  ul {
    list-style: none;
  }
  .credit {
     padding: 1rem 0;
  }
</style>


