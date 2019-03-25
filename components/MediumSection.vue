<template>
  <div class="section-container">
    <section>
      <h3 class="header">
        Frontmen on Medium
      </h3>
      <div class="content">
        <a href="https://medium.com/frontmen/art-of-debugging-with-chrome-devtools-ab7b5fd8e0b4">
          <img
            class="image"
            src="https://cdn-images-1.medium.com/max/2000/1*K2Utn78MaVzlUeIagOEZRg.png"
          >
        </a>
        <aside>
          <h4 class="title">
            Art of debugging with Chrome DevTools
          </h4>
          <p class="description">
            Chrome DevTools come with an array of features that help developers debug their apps effectively,
            and therefore find and fix the bugs faster. There are a lot of power tools in devtools which are not quite well-known amongst the developers.
          </p>
          <div class="button-wrapper">
            <a
              href="https://medium.com/frontmen/art-of-debugging-with-chrome-devtools-ab7b5fd8e0b4"
              target="_blank"
            >
              <button class="button">Read the full article</button>
            </a>
          </div>
        </aside>
      </div>
    </section>

    <div class="triangle-divider" />
  </div>
</template>

<script>
export default {
  name: 'MediumSection'
}
</script>

<style scoped>
.section-container {
  background-color: var(--lightblue);
  margin-top: 4rem;
}

.header {
  background-color: var(--darkblue);
  padding: 1rem;
  color: white;
  display: inline-block;
  text-transform: uppercase;
  margin: 0 0 2rem;
}

.title {
  color: white;
  margin-top: 0.5rem; /* for alignment with medium image*/
}

.description {
  color: black;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.content {
  display: flex;
}

.button-wrapper {
  text-align: right;
}

.image {
  max-width: 100%;
}

.button {
  padding: 12px 24px;
  background: var(--orange);
  color: #fff;
  text-transform: uppercase;
  border: 0;
  outline: none;
  cursor: pointer;
}

/* Triangle-divider is fixed from 961px and above*/
@media (max-width: 960px) {
  .triangle-divider {
    border-left: 50vw solid transparent;
    border-right: 50vw solid transparent;
  }
  .header {
    display: block;
  }
  .content {
    padding: 0 2rem;
    flex-wrap: wrap;
  }
  .section-container {
    margin-left: -2rem;
    margin-right: -2rem;
  }
}

@media (min-width: 961px) {
  .triangle-divider {
    border-left: 480px solid transparent;
    border-right: 480px solid transparent;
  }
  .header {
    width: 50%;
  }
  .content {
    padding: 0 8rem;
  }
  .section-container {
    margin-left: -8rem;
    margin-right: -8rem;
  }
}

.triangle-divider {
  background-color: var(--darkblue);
  border-top: 100px solid var(--lightblue);
}
</style>
