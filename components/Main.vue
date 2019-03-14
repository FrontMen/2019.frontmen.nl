<template>
  <main class="main" role="main" :style="{ transform: `translateX(${navOpen ? 300 : 0}px)`}">
    <p>Nav open: {{ navOpen }}</p>
    <slot/>
  </main>
</template>

<script>
export default {
  name: 'Main',
  props: {
    navOpen: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style scoped>
.main {
  background-color: white;
  padding-top: 4rem; /* same as topbar height*/
  max-width: 960px;
  margin: 0 auto;
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
}
</style>
