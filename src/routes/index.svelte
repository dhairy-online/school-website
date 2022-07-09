<script>
	import Navbar from '../components/Navbar.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<svelte:head>
	<link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />
</svelte:head>


	<div class="max-h-screen scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-500 ">
		<Navbar />
		<div style="font-family: 'Poppins', sans-serif;" class="relative">
		<div class="hero min-h-screen">
			
			<div class="hero-content flex-col lg:flex-row">
				<img alt="Logo" src="./lses-bg.png" class="rounded-lg shadow-2xl hidden mt-20 lg:mt-0 xs:block max-w-sm" />
				<div>
					<div class="hero-overlay bg-opacity-10" />
					<div class="hero-content text-start text-neutral-content ">
						<div class="max-w-md p-3">
							<div class="mb-5"> 
								<span
									class="text-3xl xs:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-tl from-yellow-500 to-blue-400"
									>The LSES Community</span
								>
							</div>

							<p class="mb-5 font-medium text-2xl ">Built by students for students.<br/> Oh and, <span class="text-transparent bg-clip-text bg-gradient-to-tl from-yellow-600 to-blue-500">its coming soon..</span></p>
							<button class="btn btn-gradient gap-2 normal-case">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									x="0px"
									y="0px"
									width="19"
									height="19"
									viewBox="0 0 16 16"
									style=" fill:#FFFFFF;"
									><path
										d="M 7.5 1 C 3.917969 1 1 3.917969 1 7.5 C 1 11.082031 3.917969 14 7.5 14 C 11.082031 14 14 11.082031 14 7.5 C 14 3.917969 11.082031 1 7.5 1 Z M 7.5 2 C 10.542969 2 13 4.457031 13 7.5 C 13 10.542969 10.542969 13 7.5 13 C 4.457031 13 2 10.542969 2 7.5 C 2 4.457031 4.457031 2 7.5 2 Z M 7 4 L 7 7 L 4 7 L 4 8 L 7 8 L 7 11 L 8 11 L 8 8 L 11 8 L 11 7 L 8 7 L 8 4 Z"
									/></svg
								>

								Coming Soon
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>

		<Footer />
	</div>
</div>
