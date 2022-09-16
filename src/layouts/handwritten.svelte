<script>
	import '../app.css';

	// These props get filled in from the page's front matter
	export let title = '';
	export let coverImageUrl = '';
</script>

<svelte:head>
	<title>{title}</title>
	<meta property="og:title" content={title} />
	<meta property="og:image" content={coverImageUrl} />
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/prismjs@1.23.0/themes/prism-okaidia.css"
	/>
</svelte:head>

<main>
	<slot />
</main>

<style>
	main {
		font-family: 'Architects Daughter', cursive;
		font-weight: normal;
		font-style: normal;
		font-size: large;
	}
</style>
