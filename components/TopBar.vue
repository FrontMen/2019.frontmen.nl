<template>
  <header role="banner">
    <button @click="openNav">
      <Icon title="Menu" name="menu-hamburger" />
    </button>

    <h1>{{ title }}</h1>

    <Logo class="logo"/>
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

button {
    background-color: transparent;
    outline: none;
    border: 0
}

header {
  background-color: var(--darkblue);
  display: flex;
  align-items: center;
}

h1 {
  flex: 1;
  text-transform: uppercase;
  font-family: Stratum;
  color: var(--lightgrey);
}

.logo {
  flex: 0 1;
}
</style>
