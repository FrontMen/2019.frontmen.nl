<template>
  <div>
    <p>Nav open: {{ navOpen }}</p>
    <slot />
  </div>
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
