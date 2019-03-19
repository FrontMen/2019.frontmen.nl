<template>
  <article>
      <h1>It takes an expert to do an excellent job</h1>
      <p>
        In a modern application, the frontend completely determines the user experience. It goes without saying that nothing
        should go wrong there. Everything needs to be coded in such a way that the app works great and feels fantastic. Anytime
        and anywhere, on all devices, in any browser and on any platform. In addition, the code should be logical and well-organized,
        fit into the existing enterprise architecture and, furthermore, be of a level of quality that is easy to maintain and
        conforms to security and performance requirements.
      </p>

    <div>image</div>

    <BlockQuote />
      <p>
        Frontmen focuses 100% on frontend architecture and development. The software we program is of such complexity, and
        the innovations succeed each other at such a pace, that this is not a job you do on the side. Our developers and
        architects are highly skilled. They live and breathe JavaScript. With a single goal in mind: translating top-notch
        techniques into new opportunities for our clients, with the shortest possible time to market.
      </p>
      <MediumSection />
  </article>
</template>

<script>
import MediumSection from "../components/MediumSection"
import BlockQuote from "../components/BlockQuote"

export default {
  components: {
    BlockQuote,
    MediumSection
  }
}
</script>

<style>
</style>
