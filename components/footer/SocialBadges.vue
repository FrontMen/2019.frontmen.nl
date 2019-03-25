<template>
  <div class="social-wrapper">
    <div class="social-item">
      <a href="https://www.medium.com/frontmen" target="_blank" rel="noopener">
        <Badge size="xs" color="#00cccc" type="social" name="medium" :show-label="false" />
      </a>
      <div class="badge-info">
        <span>We write at</span>
        <a href="https://www.medium.com/frontmen" class="fat-link" target="_blank" rel="noopener">
          <strong>Medium</strong>
        </a>
      </div>
    </div>
    <div class="social-item">
      <a href="https://www.meetup.com/FrontMania/" target="_blank" rel="noopener">
        <Badge size="xs" color="#00cccc" type="social" name="meetup" :show-label="false" />
      </a>

      <div class="badge-info">
        <span>We meet at</span>
        <a
          href="https://www.meetup.com/FrontMania/"
          class="fat-link"
          target="_blank"
          rel="noopener"
        >
          <strong>MeetUp</strong>
        </a>
      </div>
    </div>
    <div class="social-item">
      <a
        href="https://www.linkedin.com/company/frontmen-frontend-experts/"
        target="_blank"
        rel="noopener"
      >
        <Badge size="xs" color="#00cccc" type="social" name="linkedin" :show-label="false" />
      </a>
      <div class="badge-info">
        <span>We work at</span>
        <a
          href="https://www.linkedin.com/company/frontmen-frontend-experts/"
          class="fat-link"
          target="_blank"
          rel="noopener"
        >
          <strong>LinkedIn</strong>
        </a>
      </div>
    </div>
    <div class="social-item">
      <a href="https://twitter.com/frontmenhq" target="_blank" rel="noopener">
        <Badge size="xs" color="#00cccc" type="social" name="twitter" :show-label="false" />
      </a>
      <div class="badge-info">
        <span>We converse at</span>
        <a href="https://twitter.com/frontmenhq" class="fat-link" target="_blank" rel="noopener">
          <strong>Twitter</strong>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Badge from '../Badge'

export default {
  name: 'SocialBadges',
  components: {
    Badge
  }
}
</script>

<style scoped>
.social-wrapper {
  display: flex;
  flex-wrap: wrap;
}

.badge-info {
  padding-left: 1rem;
  width: 6.5rem; /* Roughly same width as longest text, for wrapping purposes */
}

.fat-link {
  color: white;
  font-weight: 600;
  text-decoration: none;
}

.social-item {
  display: inline-flex;
  align-items: center;
  padding-right: 3rem;
  margin-bottom: 2rem;
}
</style>
