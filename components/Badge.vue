<template>
  <content class="content">
    <header
      :style="{
        borderBottom: triangleY,
        borderRight: triangleX,
        borderLeft: triangleX
      }"
    />
    <content
      class="content"
      :style="{
        backgroundColor: color,
        height: .75 * size + 'em',
        width: size + 'em',
      }"
    >
      <span :style="{ padding: `0 ${0.2 * size}em` }">
        <img width="100%" :src="icon">
      </span>
      <span class="label" :style="{ fontSize: .1 * size + 'em',}">
        {{ label }}
      </span>
    </content>
    <footer
      :style="{
        borderTop: triangleY,
        borderRight: triangleX,
        borderLeft: triangleX
      }"
    />
  </content>
</template>

<script>

//todo: If you'd rather have a couple of fixed sizes use these
const sizes = {
  s: 5,
  m: 10,
  l: 15,
  xl: 20
}

export default {
  name: 'Badge',
  computed: {
    triangleY() {
      return 0.3 * this.size + 'em solid ' + this.color
    },
    triangleX() {
      return 0.5 * this.size + 'em solid transparent'
    }
  },
  props: {
    color: {
      default: '#1f1e32' //darkblue
    },
    icon: {
      required: true
    },
    label: {
      type: String
    },
    size: {
      //height of content (without arrows) in em.
      default: 10,
      type: Number
    }
  }
}
</script>

<style scoped>
.content {
  display: inline-flex;
  flex-direction: column;
}

.label {
  text-transform: uppercase;
}

.content {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  list-style: none;
  color: white;
  overflow: visible;
  z-index: 9;
}

</style>
