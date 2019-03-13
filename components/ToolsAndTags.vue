<template>
  <section>
    <h2>Our Tools</h2>
    <content class="badge-bar">

      <Badge :size="10" color="#ff5900" icon="/images/badges-tech/react.svg" label="react"></Badge>
      <Badge :size="10" color="#ff5900" icon="/images/badges-tech/redux.svg" label="redux"></Badge>
      <Badge :size="10" color="#ff5900" icon="/images/badges-tech/css.svg" label="css"></Badge>
    </content>
    <footer>
      <span>
        <img src="/images/frontdesk-avatar.png">
      </span>
      <span>
        <strong>WANT TO KNOW MORE?</strong>
        <span>Call or mail us!</span>
        <a href="tel:0302658108">030 - 26 58 108</a>
        <a href="mailto:info@frontmen.nl">info@frontmen.nl</a>
      </span>
      <aside v-show="tags">
        <strong>Tags</strong>
        <content>
          <Tag v-for="(tag, i) in tags" :key="i" :name="tag"/>
        </content>
      </aside>
    </footer>
  </section>
</template>

<script>
import Tag from './Tag'
import Badge from './Badge'

export default {
  name: 'BlockQuote',
  components: {
    Tag,
    Badge
  },
  props: {
    tags: {
      type: Array
    },
    tools: {
      type: Array
    }
  }
}
</script>

<style scoped>
strong {
  display: block;
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 2rem;
  text-transform: uppercase;
}

footer {
  background-color: var(--lightgrey);
}

.badge-bar {
  display: flex;
  justify-content: space-around;
  margin-bottom: -100px;
  margin-left: 20%
}
</style>
