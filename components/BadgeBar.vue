<template>
  <section>
    <h2>Our Tools</h2>
    <div class="badge-bar">
      <Badge
        v-for="(badge, i) in badges"
        :key="i"
        :type="type"
        :name="badge"
        :color="getColor(i)"
        :size="size"
      />
    </div>
  </section>
</template>
<script>
import Badge, { SIZES } from './Badge'
const colors = [
  '#00cccc', // lightblue
  '#1f1e32', // darkblue
  '#ff5900' // orange
]
export default {
  name: 'BadgeBar',
  components: {
    Badge
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
        return Object.keys(SIZES).indexOf(value) !== -1
      }
    }
  },
  methods: {
    getColor(i) {
      return colors[i % 3] // prevent out of bounds with modulo
    }
  }
}
</script>

<style scoped>
.badge-bar {
  display: flex;
  margin: 0 8rem -8rem 0;
}
</style>
