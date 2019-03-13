<template>
  <div>
    <TopBar title="foo" @openNav="toggleMenu" />
    <Nav :nav-open="menuOpen" @closeNav="toggleMenu" />
    <Main :nav-open="menuOpen" @closeNav="toggleMenu">
      <nuxt />
    </Main>
    <BlockQuote />
    <ToolsAndTags />
    <MediumSection />

    <Footer />
  </div>
</template>

<script>
import TopBar from '../components/TopBar'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
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
