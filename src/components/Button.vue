<template>
    <button @click="onClick" class="primary-button">{{ text }}</button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: String,
    onClick: {
        type: Function,
        required: true
    }
  }
}
</script>

<style>
    .primary-button {
        background-color: #2c3e50;
        color: #fff;
        padding: 0.5rem 1rem;
        font-size: 1rem;
        border: none;
        border-radius: 5px;
        margin: 1rem;
    }
</style>
