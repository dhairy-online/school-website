<script>
	import Footer from '../components/Footer.svelte';
	import Navbar from '../components/Navbar.svelte';
	import '../app.css';
</script>

<svelte:head>
	<title>LSES Community</title>
	<link rel="icon" href="./lses.png" type="image/icon" />
	<link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />
</svelte:head>

<div class="max-h-screen scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-500 ">
	<Navbar />
	<div style="font-family: 'Poppins', sans-serif;" class="relative">
		<slot />
		<Footer />
	</div>
</div>
