<template>
  <footer role="contentinfo" class="c-page-footer o-layout__footer" style="color: #fff;">
    <section class="c-page-footer__logo u-mb-huge">
      <a href="//">
        <img src="//img/fm-monogram-logo.svg" alt="Frontmen">
      </a>
    </section>
    <div class="o-wrapper c-page-footer__content">
      <nav class="c-page-footer__content-item">
        <h3 class="c-page-footer__title">Our website</h3>
        <ul class="o-list-bare c-page-footer__list">
          <li class="o-list-bare__item">
            <a href="/">Home</a>
          </li>
          <li class="o-list-bare__item">
            <a href="//frontend-first">Frontend first</a>
          </li>
          <li class="o-list-bare__item">
            <a href="//how-we-work">How we work</a>
          </li>
          <li class="o-list-bare__item">Work</li>
          <li class="o-list-bare__item--secondary-bullet">
            <a href="//work/quby">Quby</a>
          </li>
          <li class="o-list-bare__item--secondary-bullet">
            <a href="//work/tele2">Tele2</a>
          </li>
          <!-- <li class="o-list-bare__item--secondary-bullet">
                    <a href="//">KLM</a>
          </li>-->
          <li class="o-list-bare__item">
            <a href="//about">About us</a>
          </li>
          <li class="o-list-bare__item">
            <a href="//contact">Contact</a>
          </li>
        </ul>
      </nav>
      <div class="c-page-footer__content-item">
        <div class="contact">
          <h3 class="c-page-footer__title">Frontmen</h3>
          <div class="u-mb-normal">
            <a href="tel:+31302658108">
              <span>T</span> +31 (0)30 - 26 58 108
            </a>
            <br>
            <a href="mailto:info@frontmen.nl">
              <span>E</span> info@frontmen.nl
            </a>
          </div>
        </div>
        <div class="c-social">
          <div class="o-media c-social__link">
            <div class="o-media__badge">MEDIUMBADGE</div>
            <div class="o-media__content">
              <p>We write at</p>
              <a href="https://www.medium.com/frontmen" target="_blank" rel="noopener">
                <strong>Medium</strong>
              </a>
            </div>
          </div>
          <div class="o-media c-social__link">
            <div class="o-media__badge">frontmaniabadge</div>
            <div class="o-media__content">
              <p>We meet at</p>
              <a href="https://www.meetup.com/FrontMania/" target="_blank" rel="noopener">
                <strong>MeetUp</strong>
              </a>
            </div>
          </div>
          <div class="o-media c-social__link">
            <div class="o-media__badge">linkedinbadge</div>
            <div class="o-media__content">
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
          <div class="o-media c-social__link">
            <div class="o-media__badge">twitterbadge</div>
            <div class="o-media__content">
              <p>We converse at</p>
              <a href="https://twitter.com/frontmenhq" target="_blank" rel="noopener">
                <strong>Twitter</strong>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="copyright-foot">
      © Frontmen | <a href="/privacy">View privacy note</a>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
footer {
  background-color: var(--darkblue);
}

a {
  color: white;
}

.copyright-foot {
  background-color: var(--orange);
}
</style>
