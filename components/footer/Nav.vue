<template>
  <nav>
    <h3 class="heading">
      Our website
    </h3>
    <ul class="no-bullets no-spacing">
      <li>
        <nuxt-link class="link" :to="'/'">
          Home
        </nuxt-link>
      </li>
      <li>
        <nuxt-link class="link" :to="'/frontend-first'">
          Frontend first
        </nuxt-link>
      </li>
      <li>
        <nuxt-link class="link" :to="'/how-we-work'">
          How we work
        </nuxt-link>
      </li>
      <li class="submenu-heading">
        Work
      </li>
      <ul class="no-bullets">
        <li>
          <nuxt-link class="link" :to="'/work/quby'">
            Quby
          </nuxt-link>
        </li>
        <li>
          <nuxt-link class="link" :to="'/work/tele2'">
            Tele2
          </nuxt-link>
        </li>
      </ul>
      <!-- <li>
                    <nuxt-link class="link" :to="//">KLM</nuxt-link>
      </li>-->
      <li>
        <nuxt-link class="link" :to="'/about'">
          About us
        </nuxt-link>
      </li>
      <li>
        <nuxt-link class="link" :to="'/contact'">
          Contact
        </nuxt-link>
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
}

.no-spacing {
  padding: 0;
  margin: 0;
}

.heading {
  color: var(--orange);
}

.submenu-heading {
  color: var(--lightblue);
}

.link {
  color: white;
}
</style>
