<script context="module">
	/** @type {import('@sveltejs/kit').Load} */
	/** @ts-ignore */
	export function load({ error, status }) {
		return {
			props: {
				title: `${status}: ${error?.message}`
			}
		};
	}
</script>

<script lang="ts">
	export let title: string;
</script>

<div class="p-10 text-center">
	<h1 class="text-2xl">{title}</h1>
</div>
