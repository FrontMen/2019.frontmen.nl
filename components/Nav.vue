<template>
  <nav class="side-bar" :style="{ transform: `translateX(${navOpen ? 0 : -300}px)`}">
    <ul class="nav-list">
      <li class="nav-item">
        <nuxt-link class="nav-link" :to="'/'" @click.native="closeNav">
          Home
        </nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link class="nav-link" :to="'/frontend-first'" @click.native="closeNav">
          Frontend first
        </nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link class="nav-link" :to="'/how-we-work'" @click.native="closeNav">
          How we work
        </nuxt-link>
      </li>
      <li class="nav-heading">
        Work
      </li>
      <ul class="nav-list">
        <li class="nav-item">
          <nuxt-link class="nav-link" :to="'/work/quby'" @click.native="closeNav">
            - Quby
          </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" :to="'/work/tele2'" @click.native="closeNav">
            - Tele2
          </nuxt-link>
        </li>
      </ul>
      <li class="nav-item">
        <nuxt-link class="nav-link" :to="'/about-us'" @click.native="closeNav">
          About us
        </nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link class="nav-link" :to="'/contact'" @click.native="closeNav">
          Contact us
        </nuxt-link>
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

.nav-heading {
  margin: 0;
  color: var(--mediumgrey);
  margin-bottom: 1rem;
  font-family: 'Stratum', 'sans-serif';
  font-size: 1.75rem;
  line-height: 1.3;
  font-weight: 400;
  text-transform: uppercase;
  text-decoration: none;
}

.nav-item {
  text-decoration: none;
}

.nav-link {
  display: block;
  color: white;
  margin-bottom: 1rem;
  font-family: 'Stratum', 'sans-serif';
  font-size: 1.75rem;
  line-height: 1.3;
  font-weight: 400;
  text-transform: uppercase;
  text-decoration: none;
}

.nav-link:hover {
  color: var(--lightblue);
}

.nav-link:active {
  color: var(--orange);
}
</style>
