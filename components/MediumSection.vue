<template>
  <section>
    <h4>Frontmen on Medium</h4>
    <h3>Art of debugging with Chrome DevTools</h3>
    <img src="https://cdn-images-1.medium.com/max/2000/1*K2Utn78MaVzlUeIagOEZRg.png">
    <p>
      Chrome DevTools come with an array of features that help developers debug their apps effectively,
      and therefore find and fix the bugs faster. There are a lot of power tools in devtools which are not quite well-known amongst the developers.
    </p>
    <a href="https://medium.com/frontmen/art-of-debugging-with-chrome-devtools-ab7b5fd8e0b4">
      <button>Read the full article</button>
    </a>
  </section>
</template>

<script>
export default {
  name: 'MediumSection'
}
</script>

<style scoped>
section {
  background-color: var(--lightblue);
  padding: 1rem
}

img {
  max-width: 100%;
}

h3 {
  color: white;
}

button {
  padding: 12px 24px;
  background: var(--orange);
  color: #fff;
  text-transform: uppercase;
  border: 0;
  outline: none
}

</style>
