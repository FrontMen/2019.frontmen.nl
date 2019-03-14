<template>
  <section>
    <div class="tools">
      <h2>Our Tools</h2>
      <BadgeBar type="tech" :badges="['react', 'redux', 'jest']"/>
    </div>
    <div class="info">
      <span>
        <img src="/images/frontdesk-avatar.png">
      </span>
      <span>
        <strong class="title">WANT TO KNOW MORE?</strong>
        <span>Call or mail us!</span>
        <a href="tel:0302658108">030 - 26 58 108</a>
        <a href="mailto:info@frontmen.nl">info@frontmen.nl</a>
      </span>
      <aside v-show="tags">
        <strong class="title">Tags</strong>
        <content>
          <Tag v-for="(tag, i) in tags" :key="i" :name="tag"/>
        </content>
      </aside>
    </div>
  </section>
</template>

<script>
import Tag from './Tag'
import BadgeBar from './BadgeBar'
export default {
  name: 'BlockQuote',
  components: {
    Tag,
    BadgeBar
  },
  props: {
    tags: {
      default: ['scrum', 'bla', 'turk'],
      type: Array
    },
    tools: {
      type: Array
    }
  }
}
</script>

<style scoped>
.title {
  display: block;
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 2rem;
  text-transform: uppercase;
}

.tools {
  padding: 0 2rem;
}

.info {
  background-color: var(--lightgrey);
}
</style>
