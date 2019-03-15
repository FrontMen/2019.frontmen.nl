<template>
    <div class="triangle-divider"/>
</template>

<script>
export default {
  name: 'Triangle'
}
</script>

<style scoped>
/* Triangle-divider is fixed from 961px and above*/
@media (max-width: 960px) {
  .triangle-divider {
    border-left: 50vw solid transparent;
    border-right: 50vw solid transparent;
  }
}

@media (min-width: 961px) {
  .triangle-divider {
    border-left: 480px solid transparent;
    border-right: 480px solid transparent;
  }
}

.triangle-divider {
  width: 0;
  height: 0;
  background-color: var(--darkblue);
  border-bottom: 100px solid var(--orange);
  margin-bottom: -2rem;
}
</style>


