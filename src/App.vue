<script setup lang="ts">
import Footer from "./components/Footer.vue";
import NavBar from "./components/NavBar.vue";
</script>

<template>
	<main>
		<NavBar></NavBar>
		<RouterView />
	</main>
	<Footer></Footer>
</template>
