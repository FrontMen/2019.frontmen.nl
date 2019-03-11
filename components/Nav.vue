<template>
  <nav>
    Open: {{ navOpen }}
    <ul>
      <li>
        <nuxt-link :to="'/'">
          Home
        </nuxt-link>
      </li>
      <li>
        <nuxt-link :to="'/page-1'">
          Page 1
        </nuxt-link>
      </li>
      <li>
        <nuxt-link :to="'/page-2'">
          Page 2
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
  }
}
</script>

<style scoped>
</style>
