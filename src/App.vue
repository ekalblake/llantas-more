<script setup lang="ts">
import Footer from "./components/Footer.vue";
import NavBar from "./components/NavBar.vue";
import ToastContainer from "./components/UI/ToastContainer.vue";
</script>

<template>
	<main>
		<NavBar></NavBar>
		<RouterView />
	</main>
	<ToastContainer />
	<Footer></Footer>
</template>
