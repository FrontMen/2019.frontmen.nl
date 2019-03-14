<template>
  <nav class="side-bar" :style="{ transform: `translateX(${navOpen ? 0 : -300}px)`}">
    <ul class="nav-list">
      <li class="nav-item">
        <nuxt-link @click.native="closeNav" class="nav-link" :to="'/'">Home</nuxt-link>
      </li>
            <li class="nav-item">
        <nuxt-link @click.native="closeNav" class="nav-link" :to="'/frontend-first'">Frontend first</nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link @click.native="closeNav" class="nav-link" :to="'/page-1'">Page 1</nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link @click.native="closeNav" class="nav-link" :to="'/page-2'">Page 2</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Nav',
  props: {
    navOpen: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    closeNav() {
      this.$emit('toggleMenu')
    }
  }
}
</script>

<style scoped>
.side-bar {
  background-color: #1f1e32;
  overflow: auto;
  position: fixed;
  top: 0;
  height: 100vh;
  width: 300px;
  transition: transform 0.3s ease-in-out;
  z-index: 3;
  padding-top: 4rem;
}

.nav-list {
  list-style-type: none;
  margin: 0;
}

.nav-item {
  text-decoration: none;
}

.nav-link {
  display: block;
  color: #a5a5ad;
  padding-bottom: 1rem;
  font-family: 'Stratum', 'sans-serif';
  font-size: 2rem;
  font-size: 1.75rem;
  line-height: 1.3;
  font-weight: 400;
  text-transform: uppercase;
  text-decoration: none;
}
</style>
