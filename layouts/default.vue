<template>
    <div>
        <TopBar />
        <Nav />
        <nuxt/>
        <Footer />
    </div>
</template>

<script>
    import TopBar from "../components/TopBar";
    import Nav from "../components/Nav";
    import Footer from "../components/Footer";

    export default {
        components: {
            Footer,
            Nav,
            TopBar,
        }
    }
</script>
