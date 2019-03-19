<template>
  <div class="info-container">
    <section class="info-content">
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
    </section>
    <div class="triangle-divider"/>
  </div>
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
      type: Array
    },
    badges: {
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

.info-content {
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

@media (max-width: 960px) {
  .info-container {
    margin: 0 -2rem;
  }
}

@media (min-width: 961px) {
  .info-container {
    margin: 0 -8rem;
  }
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
  background-color: var(--darkblue);
  border-top: 100px solid var(--mediumgrey);
}
</style>
