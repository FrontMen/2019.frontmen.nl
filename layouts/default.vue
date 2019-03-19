<template>
  <div class="container">
    <TopBar :nav-open="menuOpen" @openNav="toggleMenu"/>
    <Nav :nav-open="menuOpen" @toggleMenu="toggleMenu"/>
    <Main :nav-open="menuOpen" @toggleMenu="toggleMenu">
      <nuxt class="page"/>
      <BlockQuote/>
      <InfoSection/>
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
import InfoSection from '../components/InfoSection'

export default {
  components: {
    BlockQuote,
    Main,
    MediumSection,
    Footer,
    Nav,
    TopBar,
    InfoSection
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



.page h1 {
  font-size: 3rem;
  font-family: Stratum, sans serif;
}

.page h2 {
  letter-spacing: .125rem;
  text-transform: uppercase;
}

.page p {
  font-size: 1.25rem;
}

.page p:first-of-type {
    color: var(--lightblue)
}

@media (max-width: 960px) {
  .page {
    margin-left: 2rem;
    margin-right: 2rem;
  }
}

@media (min-width: 961px) {
  .page {
    margin-left: 8rem;
    margin-right: 8rem;
  }
}
</style>
