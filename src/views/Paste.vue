<template>
  <div class="container">
    <Title title="Vue Pastebin"/>
    <p>A quick and shareable place to paste code snippets!</p>
    <div class="card">
      <Pastebox />
      <Button :onClick="addPaste" text="Add Paste!"/>
    </div>
    <p class="credit">Created By <a target="_blank" href="https://github.com/Tlueders">Tanner Lueders</a></p>
  </div>
</template>

<script>
// @ is an alias to /src
import Title from '@/components/Title.vue'
import Pastebox from '@/components/Pastebox.vue'
import Button from '@/components/Button.vue'

export default {
  name: 'paste',
  components: {
    Title,
    Pastebox,
    Button
  },
  methods: {
    addPaste: function() {
        let paste = this.$store.getters.paste
        let language = this.$store.getters.language
        const payload = {
          paste: paste,
          language: language
        }
        this.$store.dispatch('addPaste', payload)
    }
  }
}
</script>

<style>
  .container {
    width: 90%;
    margin: 0 auto;
  }

  p {
    margin-top: 0;
  }

  .card {
    background-color: white;
    padding: 1rem;
    box-shadow: 0px 7px 14px rgba(0, 0, 0, 0.25);
  }

  #nav {
    margin-bottom: 2rem;
  }

  .credit {
     padding: 1rem 0;
  }
</style>

