<template>
  <header role="banner">
    <button @click="openNav">
      <Icon title="Menu" name="menu-hamburger" />
    </button>

    <h1>{{ title }}</h1>

    <Logo />
  </header>
</template>

<script>
import Logo from './Logo'
import Icon from './Icon'

export default {
  name: 'TopBar',
  components: {
    Icon,
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
