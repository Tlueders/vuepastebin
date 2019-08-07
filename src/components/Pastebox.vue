<template>
    <div>
      <select id="language-select" name="language" @change="onChange">
        <option value="js">Javascript</option>
        <option value="json">JSON</option>
        <option value="html">HTML</option>
        <option value="css">CSS</option>
        <option value="php">PHP</option>
        <option value="go">GO</option>
      </select>
      <prism-editor v-model="code" @change="onPasteboxChange" :language="language" :line-numbers="lineNumbers" :readonly="readonly">{{code}}</prism-editor>
    </div>
</template>

<script>
import "prismjs";
import "prismjs/themes/prism.css";
import "vue-prism-editor/dist/VuePrismEditor.css";
import PrismEditor from 'vue-prism-editor'

export default {
  name: 'Title',
  data(){
    return {
      lineNumbers: true,
      language: "js"
    }
  },
  components: {
    PrismEditor
  },
  
  props: {
    title: String,
    code: String,
    readonly: Boolean
  },
  methods: {
      onPasteboxChange: function(code) {
        this.$store.commit('onPasteboxChange', code)
      },
      onChange: function(event) {
        this.$store.commit('changeLanguage', event.target.value)
      }
  }
}
</script>

<style>
    .prism-editor-wrapper {
        width: 100%;
        max-height: 450px;
    }

    #language-select {
      float: left;
      margin-bottom: 1rem;
      padding: 1rem;
      background-color: #f5f2f0;
      border: none;
      outline: none;
      color: #666;
      cursor: pointer;
      font-size: 0.75rem;
      height: 40px;
      width: 250px;
    }
</style>
