<template>
  <section>
    <div>
      <h2 class="heading">Our Tools</h2>
      <BadgeBar type="tech" :badges="['react', 'redux', 'jest']"/>
    </div>
    <div class="info">
      <div class="left-content">
        <span>
          <img src="/images/frontdesk-avatar.png" class="image" alt="frontdesk-avatar">
        </span>
        <span>
          <strong class="title">WANT TO KNOW MORE?</strong>
          <ul class="list">
            <li>Call or mail us!</li>
            <li>
              <a href="tel:0302658108">030 - 26 58 108</a>
            </li>
            <li>
              <a href="mailto:info@frontmen.nl">info@frontmen.nl</a>
            </li>
          </ul>
        </span>
      </div>
      <aside class="right-content" v-show="tags">
        <strong class="title">Tags</strong>
        <div>
          <Tag v-for="(tag, i) in tags" :key="i" :name="tag"/>
        </div>
      </aside>
    </div>
  </section>
</template>

<script>
import Tag from './Tag'
import BadgeBar from './BadgeBar'
export default {
  name: 'InfoSection',
  components: {
    Tag,
    BadgeBar
  },
  props: {
    tags: {
      default: ['react', 'redux', 'html'],
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

.heading {
  padding: 0 2rem;
}

.image {
  width: 8rem;
  margin-right: 1rem;
}

.left-content {
  width: 50%;
  display: inline-flex;
  justify-content: space-around;
}

.right-content {
  width: 50%;
}

.info {
  background-color: var(--mediumgrey);
  padding-top: 10rem;
  padding-bottom: 2rem;
  display: flex;
  padding-left: 2rem;
  padding-right: 2rem;
}

.list {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
</style>
