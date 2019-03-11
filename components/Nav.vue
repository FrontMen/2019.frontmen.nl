<template>
  <nav>
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
  name: 'Nav'
}
</script>

<style scoped>
</style>
