<template>
  <blockquote>
      <p>
      Any application that can be written in JavaScript, will eventually be written in JavaScript
      </p>
    <footer>
      <cite>
        <strong>Jeff Atwood</strong>
        <br>founder Stack overflow
      </cite>
    </footer>
  </blockquote>
</template>

<script>
export default {
  name: 'BlockQuote'
}
</script>

<style scoped>
blockquote {
  color: var(--orange);
}

p {
  font-size: 2.25rem;
  line-height: 1.33333;
  margin-bottom: 1rem
}

footer {
  position: relative;
  border-top: solid 2px var(--orange);
  padding-top: 48px;
  margin-bottom: 2em
}

footer:before {
  border-color: var(--orange) transparent transparent transparent;
  content: '';
  position: absolute;
  top: -2px;
  left: 25%;
  border-style: solid;
  border-width: 48px 48px 0 0;
}

footer:after {
  border-color: #fff transparent transparent transparent;
  top: -4px;
  left: calc(25% + 2px);
  border-width: 45px 45px 0 0;
  border-style: solid;
  content: '';
  position: absolute;
}
</style>
