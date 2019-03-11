<template>
  <header role="banner">
    <button @click="openNav">
      click
    </button>

    <h1>{{ title }}</h1>

    <nuxt-link :to="'/'">
      <Logo />
    </nuxt-link>
  </header>
</template>

<script>
import Logo from './Logo'

export default {
  name: 'TopBar',
  components: {
    Logo
  },
  props: {
    title: {
      type: String,
      required: true
    }
  },
  methods: {
    openNav() {
      this.$emit('openNav')
    }
  }
}
</script>

<style scoped>
</style>
