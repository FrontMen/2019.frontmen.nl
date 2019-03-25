<template>
  <footer
    class="footer"
    role="contentinfo"
    style="color: #fff;"
    :style="{ transform: `translateX(${navOpen ? 300 : 0}px)`}"
  >
    <header class="flex-row">
      <img src="/images/fm-monogram-logo.svg" height="50rem" alt="Frontmen">
    </header>
    <div class="flex-row">
      <div class="left half">
        <Nav />
      </div>

      <aside class="right half">
        <Contact />
        <SocialBadges />
      </aside>
    </div>
    <Triangle />
    <Copyright />
  </footer>
</template>

<script>
import Contact from './Contact'
import Copyright from './Copyright'
import Nav from './Nav'
import SocialBadges from './SocialBadges'
import Triangle from './Triangle'

export default {
  name: 'Footer',
  components: {
    Contact,
    Copyright,
    Nav,
    SocialBadges,
    Triangle
  },
  props: {
    navOpen: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style scoped>
.flex-row {
  display: flex;
}

.left {
  padding-left: 5rem;
}

.right {
  margin-left: -5rem;
}

.half {
  width: 50%;
  display: inline-flex;
  flex-direction: column;
}

.footer {
  padding-top: 1rem;
  background-color: var(--darkblue);
  max-width: 960px;
  margin: 0 auto;
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
}

.flex-row {
  display: flex;
  justify-content: space-around;
}
</style>
