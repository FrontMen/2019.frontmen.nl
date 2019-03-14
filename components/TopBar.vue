<template>
  <header
    class="top-bar"
    role="banner"
    :style="{
    transform: `translate(${navOpen ? 300 : 0 }px)`
    }"
  >
    <button class="menu-button" @click="openNav">
      <Icon title="Menu" name="menu-hamburger"/>
    </button>

    <h1>{{ currentRoute}}</h1>

    <img src="/images/fm-monogram-logo.svg" class="logo" alt="Frontmen">
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
    navOpen: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    currentRoute() {
      console.log(this.$route)
      return this.$route.path.replace(/-/g, ' ').substring(1) //remove '/' and '-' from route.path (route.name is not accurate)
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
.menu-button {
  background-color: transparent;
  outline: none;
  border: 0;
  margin-right: 1rem;
}

.top-bar {
  background-color: var(--darkblue);
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;
  height: 4rem;
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
}

h1 {
  flex: 1;
  text-transform: uppercase;
  font-family: Stratum;
  color: var(--lightgrey);
}

.logo {
  width: 2.5rem;
  margin-right: 0.5rem;
}
</style>
