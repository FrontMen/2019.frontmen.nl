<template>
  <footer role="contentinfo" style="color: #fff;">
    <a href="/" class="flex-row">
      <img src="/images/fm-monogram-logo.svg" height="50rem" alt="Frontmen">
    </a>
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
    </div>

    <div class="flex-row">
      <div>
        <Badge :size="4" color="#00cccc" icon="/images/badges-social/medium.svg"></Badge>
        <div>
          <p>We write at</p>
          <a href="https://www.medium.com/frontmen" target="_blank" rel="noopener">
            <strong>Medium</strong>
          </a>
        </div>
      </div>
      <div>
        <Badge :size="4" color="#00cccc" icon="/images/badges-social/meetup.svg">twitterbadge</Badge>
        <div>
          <p>We meet at</p>
          <a href="https://www.meetup.com/FrontMania/" target="_blank" rel="noopener">
            <strong>MeetUp</strong>
          </a>
        </div>
      </div>
      <div>
        <Badge :size="4" color="#00cccc" icon="/images/badges-social/linkedin.svg"></Badge>
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
        <Badge :size="4" color="#00cccc" icon="/images/badges-social/twitter.svg"></Badge>
        <div>
          <p>We converse at</p>
          <a href="https://twitter.com/frontmenhq" target="_blank" rel="noopener">
            <strong>Twitter</strong>
          </a>
        </div>
      </div>
    </div>

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
  }
}
</script>

<style scoped>
footer {
  background-color: var(--darkblue);
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

.copyright-footer {
  background-color: var(--orange);
}
</style>
