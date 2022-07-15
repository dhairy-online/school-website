<div
	class="navbar absolute bg-grey-900 top-0 z-50 px-10 bg-opacity-20 backdrop-blur-lg text-lg"
	style="font-family: 'Poppins', sans-serif;"
>
	<div class="navbar-start">
		<div class="dropdown">
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label tabindex="0" class="btn btn-ghost lg:hidden">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h8m-8 6h16"
					/></svg
				>
			</label>
			<ul
				tabindex="0"
				class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
			>
				<li><a href="/about">About</a></li>
				<li><a href="https://github.com/dhairy-online/school-website">Github</a></li>
			</ul>
		</div>

		<!-- svelte-ignore a11y-label-has-associated-control -->
		<label tabindex="0" class="avatar">
			<div class="w-14 rounded-full btn btn-ghost" href="/">
				<img alt="LSES Logo" src="./lses.png" />
			</div>
		</label>
		<div class="hidden lg:flex">
			<ul class="menu menu-horizontal p-0">
				<li><a href="/about">About</a></li>
				<li><a href="https://github.com/dhairy-online/school-website">Github</a></li>
			</ul>
		</div>
	</div>
	<div class="navbar- hidden lg:flex" />
	<div class="navbar-end">
		<a class="btn btn-gradient normal-case" href="https://discord.gg/M8hCqy857P">Discord</a>
	</div>
</div>
