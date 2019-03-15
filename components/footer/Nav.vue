<template>
  <nav>
    <h3 class="heading">Our website</h3>
    <ul class="no-bullets">
      <li>
        <a class="link" href="/">Home</a>
      </li>
      <li>
        <a class="link" href="/frontend-first">Frontend first</a>
      </li>
      <li>
        <a class="link" href="/how-we-work">How we work</a>
      </li>
      <li>Work</li>
      <li>
        <a class="link" href="/work/quby">Quby</a>
      </li>
      <li>
        <a class="link" href="/work/tele2">Tele2</a>
      </li>
      <!-- <li>
                    <a class="link" href="//">KLM</a>
      </li>-->
      <li>
        <a class="link" href="/about">About us</a>
      </li>
      <li>
        <a class="link" href="/contact">Contact</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Nav'
}
</script>

<style scoped>
.no-bullets {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.heading {
  color: var(--orange);
}

.link {
    color: white;
}
</style>


