<template>
  <div>
    <TopBar title="foo" @openNav="toggleMenu" />
    <Nav :nav-open="menuOpen" @closeNav="toggleMenu" />
    <Main :nav-open="menuOpen" @closeNav="toggleMenu">
      <nuxt />
    </Main>
    <BlockQuote />
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


export default {
  components: {
    BlockQuote,
    Main,
    MediumSection,
    Footer,
    Nav,
    TopBar
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
