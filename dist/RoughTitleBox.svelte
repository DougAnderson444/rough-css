<script>
	let min = -15;
	let max = 15; // 1 or 2 looks like a sketch
	const high90s = () => 100 - Math.random() * (max - min) + min;
	const singlDigs = () => 1 + Math.random() * (max - min) + min;

	export let background = '#ddd';
</script>

<div class="boxinner" style:background style:transform={`rotate(${singlDigs()}deg)`}>
	<slot />
</div>

<style>
	div {
		font-family: 'Bangers', cursive;
		font-size: 30px;
		min-width: auto;
	}

	.boxinner {
		transform: rotate(2deg);
		margin: 12px;
		padding: 5px;
		float: left;
		border: 1px solid #222;
		box-shadow: 3px 3px 0 #222;
	}
</style>
