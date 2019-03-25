<template>
  <header
    class="top-bar"
    role="banner"
    :style="{
      transform: `translate(${navOpen ? 300 : 0 }px)`
    }"
  >
    <button class="menu-button" @click="openNav">
      <img src="/images/icon-menu-hamburger.svg" class="logo" alt="Menu">
    </button>

    <h1 v-if="isHomePage" class="page-title">
      FRONTMEN
    </h1>
    <h1 v-else class="page-title">
      <span v-show="isWork" class="page-category">WORK</span>
      {{ currentRoute }}
    </h1>

    <img src="/images/fm-monogram-logo.svg" class="logo" alt="Frontmen">
  </header>
</template>

<script>
export default {
  name: 'TopBar',
  props: {
    navOpen: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    currentRoute() {
      // remove '-work' and '-' from route name
      return this.$route.name.replace(/work-|-/g, ' ')
    },
    isWork() {
      // checks if route starts with work
      return /^work/.test(this.$route.name)
    },
    isHomePage() {
      return this.$route.path === '/'
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
