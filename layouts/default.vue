<template>
  <div class="container">
    <TopBar :nav-open="menuOpen" @openNav="toggleMenu"/>
    <Nav :nav-open="menuOpen" @toggleMenu="toggleMenu"/>
    <Main :nav-open="menuOpen" @toggleMenu="toggleMenu">
      <nuxt/>
      <BlockQuote/>
      <ToolsAndTags/>
      <MediumSection/>
    </Main>

    <Footer :nav-open="menuOpen"/>
  </div>
</template>

<script>
import TopBar from '../components/TopBar'
import Nav from '../components/Nav'
import Footer from '../components/footer/Footer'
import Main from '../components/Main'
import MediumSection from '../components/MediumSection'
import BlockQuote from '../components/BlockQuote'
import ToolsAndTags from '../components/ToolsAndTags'

export default {
  components: {
    BlockQuote,
    Main,
    MediumSection,
    Footer,
    Nav,
    TopBar,
    ToolsAndTags
  },
  data() {
    return {
      menuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen
    }
  }
}
</script>

<style>

.container {
    background-color: #eee;
}
</style>
