<template>
  <footer
    role="contentinfo"
    style="color: #fff;"
    :style="{ transform: `translateX(${navOpen ? 300 : 0}px)`}"
  >
    <header class="flex-row">
      <img src="/images/fm-monogram-logo.svg" height="50rem" alt="Frontmen">
    </header>
    <div class="flex-row">
      <div class="left half">
        <nav>
          <h3>Our website</h3>
          <ul class="no-bullets">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/frontend-first">Frontend first</a>
            </li>
            <li>
              <a href="/how-we-work">How we work</a>
            </li>
            <li>Work</li>
            <li>
              <a href="/work/quby">Quby</a>
            </li>
            <li>
              <a href="/work/tele2">Tele2</a>
            </li>
            <!-- <li>
                    <a href="//">KLM</a>
            </li>-->
            <li>
              <a href="/about">About us</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>

      <aside class="right half">
        <Contact/>
        <SocialBadges/>
      </aside>
    </div>
    <div class="triangle-divider"/>
    <div class="copyright-footer">
      © Frontmen |
      <a href="/privacy">View privacy note</a>
    </div>
  </footer>
</template>

<script>
import Contact from './Contact'
import SocialBadges from './SocialBadges'

export default {
  name: 'Footer',
  components: {
    Contact,
    SocialBadges
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

footer {
  background-color: var(--darkblue);
  max-width: 960px;
  margin: 0 auto;
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
}

h3 {
  color: var(--orange);
}

a {
  color: white;
}

.no-bullets {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.flex-row {
  display: flex;
  justify-content: space-around;
}

.flex-column {
  display: flex;
  direction: column;
}

.copyright-footer {
  width: 100%;
  text-align: center;
  height: 2rem;
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
  width: 0;
  height: 0;
  background-color: var(--darkblue);
  border-bottom: 100px solid var(--orange);
  margin-bottom: -2rem;
}
</style>
