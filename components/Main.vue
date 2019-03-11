<template>
  <main role="main">
    <p>Nav open: {{ navOpen }}</p>
    <slot />
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
</style>
