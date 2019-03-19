<template>
  <div>
    <nuxtdown-body class="markdown" :body="page.body" />
  </div>
</template>

<script>
export default {
  head: function() {
    return {
      title: `${this.page.title}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.page.description
        }
      ]
    }
  },
  asyncData: async ({ app, route, payload }) => {
    return {
      page: (await app.$content('/pages').get(route.path)) || payload
    }
  }
}
</script>

<style>
/* https://stackoverflow.com/questions/2717480/css-selector-for-first-element-with-class */


.markdown h1 {
  font-size: 3rem;
  font-family: Stratum, sans serif;
}

.markdown h2 {
  letter-spacing: .125rem;
  text-transform: uppercase;
}

.markdown p {
  font-size: 1.25rem;
}

.markdown p:first-of-type {
    color: var(--lightblue)
}

@media (max-width: 960px) {
  .markdown {
    margin-left: 2rem;
    margin-right: 2rem;
  }
}

@media (min-width: 961px) {
  .markdown {
    margin-left: 8rem;
    margin-right: 8rem;
  }
}

</style>
