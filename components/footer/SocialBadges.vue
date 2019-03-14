<template>
  <div class="social-wrapper">
    <div class="social-item">
      <Badge size="xs" color="#00cccc" type="social" name="medium" :showLabel="false"/>
      <div class="badge-info">
        <div>We write at</div>
        <a href="https://www.medium.com/frontmen" class="fat-link" target="_blank" rel="noopener">
          <strong>Medium</strong>
        </a>
      </div>
    </div>
    <div class="social-item">
      <Badge size="xs" color="#00cccc" type="social" name="meetup" :showLabel="false"/>
      <div class="badge-info">
        <div>We meet at</div>
        <a href="https://www.meetup.com/FrontMania/" class="fat-link" target="_blank" rel="noopener">
          <strong>MeetUp</strong>
        </a>
      </div>
    </div>
    <div class="social-item">
      <Badge size="xs" color="#00cccc" type="social" name="linkedin" :showLabel="false"/>
      <div class="badge-info">
        <div>We work at</div>
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
      <Badge size="xs" color="#00cccc" type="social" name="twitter" :showLabel="false"/>
      <div class="badge-info">
        <div>We converse at</div>
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
}

.fat-link {
  color: white;
  font-weight: 600;
  text-decoration: none;
}

.social-item {
  display: inline-flex;
  align-items: center;
  width: 50%;
  margin-bottom: 2rem;
}
</style>


