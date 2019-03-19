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

    <h1 class="page-title" v-if="isHomePage">FRONTMEN</h1>
    <h1 class="page-title" v-else>
      <span class="page-category" v-show="isWork">WORK</span>
      {{ currentRoute}}
    </h1>

    <img src="~/static/images/fm-monogram-logo.svg" class="logo" alt="Frontmen">
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
      //remove '-work' and '-' from route name
      return this.$route.name.replace(/work-|-/g, ' ')
    },
    isWork() {
      //checks if route starts with work
      return /^work/.test(this.$route.name)
    },
    isHomePage() {
      return '/' === this.$route.path
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
  margin: 0 0.5rem;
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

.page-title {
  flex: 1;
  text-transform: uppercase;
  font-family: Stratum;
  color: white;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.page-category {
  color: var(--orange);
  font-family: Stratum;
}

.logo {
  width: 2.5rem;
  margin-right: 0.5rem;
}
</style>
