<template>
  <section>
    <h4>Frontmen on Medium</h4>
    <h3>Art of debugging with Chrome DevTools</h3>
    <a href="https://medium.com/frontmen/art-of-debugging-with-chrome-devtools-ab7b5fd8e0b4">
      <img src="https://cdn-images-1.medium.com/max/2000/1*K2Utn78MaVzlUeIagOEZRg.png">
    </a>

    <p>
      Chrome DevTools come with an array of features that help developers debug their apps effectively,
      and therefore find and fix the bugs faster. There are a lot of power tools in devtools which are not quite well-known amongst the developers.
    </p>
    <div :style="{ textAlign: 'center', width: '100%'}">
      <a href="https://medium.com/frontmen/art-of-debugging-with-chrome-devtools-ab7b5fd8e0b4">
        <button>Read the full article</button>
      </a>
    </div>
    <div class="triangle-divider"/>
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
  outline: none;
}

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
  background-color: var(--darkblue);
  border-top: 100px solid var(--lightblue);
}
</style>
