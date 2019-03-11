<template>
  <span
    class="icon"
    :style="{
      'background-image': `url('images/icon-${name}.svg')`,
      width: size + 'px',
      height: size + 'px',
    }"
  >
    <span class="icon-title">{{ title }}</span>
  </span>
</template>

<script>
const SIZES = [16, 20, 24, 30, 34, 40, 44]
const ICONS = ['menu-close', 'menu-hamburger']

export default {
  name: 'Icon',
  props: {
    name: {
      type: String,
      required: true,
      validator: value => {
        return ICONS.indexOf(value) !== -1
      }
    },
    title: {
      type: String,
      required: true
    },
    size: {
      type: Number,
      default: 40,
      validator: value => {
        return SIZES.indexOf(value) !== -1
      }
    }
  }
}
</script>

<style scoped>
.icon {
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  display: inline-block;
}
.icon-title {
  border: 0 !important;
  clip: rect(0 0 0 0) !important;
  clip-path: inset(50%) !important;
  height: 1px !important;
  margin: -1px !important;
  overflow: hidden !important;
  padding: 0 !important;
  position: absolute !important;
  white-space: nowrap !important;
  width: 1px !important;
}
</style>
