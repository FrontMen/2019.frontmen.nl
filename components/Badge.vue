<template>
  <span class="badge">
    <span
      :style="{
        borderBottom: triangleY,
        borderRight: triangleX,
        borderLeft: triangleX
      }"
    />
    <span
      class="content"
      :style="{
        backgroundColor: color,
        height: .75 * sizeNumber + 'rem',
        width: sizeNumber + 'rem',
      }"
    >
      <span :style="{ padding: `0 ${0.2 * sizeNumber}rem` }">
        <img width="100%" :src="`/images/badges-${type}/${name}.svg`" :alt="`${name} logo`">
      </span>
      <span
        v-show="showLabel"
        class="label"
        :style="{ fontSize: .1 * sizeNumber + 'rem',}"
      >{{ name }}</span>
    </span>
    <span
      :style="{
        borderTop: triangleY,
        borderRight: triangleX,
        borderLeft: triangleX
      }"
    />
  </span>
</template>

<script>
export const SIZES = {
  xs: 3,
  s: 5,
  m: 10,
  l: 15,
  xl: 20
}

export default {
  name: 'Badge',
  props: {
    color: {
      type: String,
      default: '#1f1e32' // darkblue
    },
    type: {
      required: true,
      validator: value => {
        // The value must match one of these strings
        return ['project', 'social', 'tech'].indexOf(value) !== -1
      }
    },
    name: {
      type: String,
      required: true
    },
    showLabel: {
      type: Boolean,
      default: true
    },
    size: {
      default: 'm',
      validator: value => {
        return Object.keys(SIZES).indexOf(value) !== -1
      }
    }
  },
  computed: {
    sizeNumber() {
      return SIZES[this.size]
    },
    triangleY() {
      return 0.3 * this.sizeNumber + 'rem solid ' + this.color
    },
    triangleX() {
      return 0.5 * this.sizeNumber + 'rem solid transparent'
    }
  }
}
</script>

<style scoped>
.badge {
  flex-direction: column;
  display: inline-flex;
  z-index: 2;
  margin-right: 1rem;
}

.content {
  display: inline-flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  text-align: center;
  list-style: none;
  color: white;
  overflow: visible;
}

.label {
  text-transform: uppercase;
}
</style>
