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
      <div>
        <div>
          <h3>Frontmen</h3>
          <div>
            <a href="tel:+31302658108">+31 (0)30 - 26 58 108</a>
            <br>
            <a href="mailto:info@frontmen.nl">info@frontmen.nl</a>
          </div>
        </div>
      </div>

      <div class="flex-row">
        <div>
          <Badge size="s" color="#00cccc" type="social" name="medium" icon="/images/badges-social/medium.svg"  :showLabel="false" />
          <div>
            <p>We write at</p>
            <a href="https://www.medium.com/frontmen" target="_blank" rel="noopener">
              <strong>Medium</strong>
            </a>
          </div>
        </div>
        <div>
          <Badge size="s" color="#00cccc" type="social" name="meetup" :showLabel="false" />
          <div>
            <p>We meet at</p>
            <a href="https://www.meetup.com/FrontMania/" target="_blank" rel="noopener">
              <strong>MeetUp</strong>
            </a>
          </div>
        </div>
        <div>
          <Badge size="s" color="#00cccc" type="social" name="linkedin" :showLabel="false" />
          <div>
            <p>We work at</p>
            <a
              href="https://www.linkedin.com/company/frontmen-frontend-experts/"
              target="_blank"
              rel="noopener"
            >
              <strong>LinkedIn</strong>
            </a>
          </div>
        </div>
        <div>
          <Badge size="s" color="#00cccc" type="social" name="twitter" :showLabel="false" />
          <div>
            <p>We converse at</p>
            <a href="https://twitter.com/frontmenhq" target="_blank" rel="noopener">
              <strong>Twitter</strong>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="triangle-divider"/>
    <div class="copyright-footer">
      © Frontmen |
      <a href="/privacy">View privacy note</a>
    </div>
  </footer>
</template>

<script>
import Badge from './Badge'

export default {
  name: 'Footer',
  components: {
    Badge
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
