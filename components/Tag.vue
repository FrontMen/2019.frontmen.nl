<template>
  <div>{{ name }}</div>
</template>

<script>
export default {
  name: 'BlockQuote',
  props: ['name']
}
</script>

<style scoped>
div {
  background-color: var(--lightblue);
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  min-width: 50px;
  text-align: center;
  padding: 0 6px;
  margin: 0 24px 12px 24px;
  color: #fff;
}

div:before {
  left: -20px;
  border-style: solid;
  border-width: 15px 20px 15px 0;
  border-color: transparent var(--lightblue) transparent transparent;
  content: '';
  position: absolute;
  width: 0;
  height: 0;
}

div:after {
  right: -20px;
  border-style: solid;
  border-width: 15px 0 15px 20px;
  border-color: transparent transparent transparent var(--lightblue);
  content: '';
  position: absolute;
  width: 0;
  height: 0;
}
</style>
