<template>
  <article>
    <h1>How we got Tele2 to use scrum and developed an innovative app using an Al-chatbot.</h1>
    <p>Tele2 goes to great lengths to offer their subscribers the very best customer experience. Part of this experience is a great working MyTele2 app. With the help of 800 customers (and an enthusiastic Frontmen team the existing app was radically transformed, killing two (challenging) birds with one stone in the process.</p>

    <div>image</div>

    <h2>The challenge</h2>
    <p>To create a hybrid application, replacing two existing native apps (iOS and Android). It needed to perform equally well on all devices and be easy to maintain. In addition, radically new branding had to be implemented – complicated further by a multitude of animations.</p>
    <p>Our second job was to develop a special feature that would make the app go above and beyond the usual functionality. Tele2 wanted to turn the MyTele2 app into a smart self-service app that would literally listen to customers and answer questions about their mobile subscription.</p>

    <div>image</div>

    <h2>Our approach</h2>
    <p>First of all, in October 2017 we introduced working with the scrum method in an agile environment. We put together a development team of four developers, a test automation expert and a business analist (scrum master), all working together. In short sprints, the team developed working app components, which were then tested by the end users. Their first encounter with agile was so successful, that Tele2 is now using this method for all their development teams.</p>

    <h2>Our product</h2>
    <p>The development team created an app with the new branding. In addition to the usual navigation they implemented an innovative core feature: a self-learning chatbot based on IBM Watson Assistant. The app no longer has separate codes for iOS and Android, significantly simplifying its maintenance.</p>
    <p>We also found a solution to the technically complex challenge (especially on Android) of running animations while maintaining performance.</p>
    <p>When opening the app, customers immediately come across the appealing chat function. Thanks to the built-in machine learning feature, the more questions the user asks, the smarter the app becomes.</p>

    <h2>Our techniques</h2>
    <p>The application was built in React native. Redux is used for in-app communication, and to manage side effects we use Redux-sagas. Unit tests are performed continuously and automatically with the help of Jest and Enzyme.</p>
    <p>New functionalities and bug fixes are implemented through a feedback loop. All users are able to send bug reports including screenshots and recordings directly to the developers.</p>

    <h2>The result</h2>
    <p>The app is now –after two internal releases and one beta release– used by over 200,000 people, and receives excellent feedback. It appears that users enjoy helping to make the app smarter.</p>
    <BadgeBar :badges="['react', 'redux', 'redux-saga']" />
    <InfoSection :tags="['Mobile app', 'Artificial intelligence', 'Chatbot']" />
  </article>
</template>

<script>
import BadgeBar from '@/components/BadgeBar'
import InfoSection from '@/components/InfoSection'

export default {
  components: {
    BadgeBar,
    InfoSection
  }
}
</script>

<style>
</style>
