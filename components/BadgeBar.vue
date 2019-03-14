<template>
  <section class="badge-bar">
    <Badge
      v-for="(badge, i) in badges"
      :key="i"
      :type="type"
      :name="badge"
      :color="getColor(i)"
      :size="size"
    />
  </section>
</template>
<script>
import Badge from './Badge'
const colors =  [
        '#00cccc', //lightblue
        '#1f1e32', //darkblue
        '#ff5900' //orange
      ]
export default {
  name: 'BadgeBar',
  components: {
    Badge
  },
  methods: {
    getColor(i) {
      return colors[i % 3] //prevent out of bounds with modulo
    }
  },
  props: {
    badges: {
      type: Array,
      required: true
    },
    type: {
      default: 'tech',
      validator: value => {
        return ['project', 'social', 'tech'].indexOf(value) !== -1
      }
    },
    size: {
      default: 'm',
      validator: value => {
        return ['s', 'm', 'l', 'xl'].indexOf(value) !== -1
      }
    }
  }
}
</script>

<style scoped>
.badge-bar {
  display: flex;
  margin-bottom: -8rem;
}
</style>

