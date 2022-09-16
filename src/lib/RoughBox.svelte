<script>
	import { onMount } from 'svelte';

	let min = -1;
	let max = 2; // 1 or 2 looks like a sketch

	let high90s = () => 100 - Math.random() * (max - min) + min;
	let singlDigs = () => 1 + Math.random() * (max - min) + min;

	let bordRad = `${high90s()}% ${singlDigs()}% ${high90s()}% ${singlDigs()}%/${singlDigs()}% ${high90s()}% ${singlDigs()}% ${high90s()}%`;

	let borderWidth = `${singlDigs()}px ${singlDigs()}px ${singlDigs()}px ${singlDigs()}px`;

	let rotate = () => `rotate(${Math.floor(singlDigs() / 2)}deg)`;

	let mounted = false;

	onMount(() => {
		mounted = true;
	});
</script>

{#if mounted}
	<div
		class="box"
		style:border-radius={bordRad}
		style:transform={rotate()}
		style:border-width={borderWidth}
	>
		<div class="boxinner">
			<slot name="boxinner">Hi</slot>
		</div>
		<div class="inner">
			<slot />
		</div>
	</div>
{/if}

<style>
	@import url(https://fonts.googleapis.com/css?family=Bangers);
	div {
		font-family: 'Bangers', cursive;
		font-size: 25px;
	}
	@font-face {
		font-family: 'Bangers';
		font-style: normal;
		font-weight: 400;
		src: url(https://fonts.googleapis.com/css?family=Bangers);
	}

	.box {
		margin: 5px;
		min-width: 250px;
		/*   height:250px; */
		background: #fff;
		border: solid black;
		border-color: black;
		float: left;
	}

	.inner {
		margin: 15px;
		/* transform: rotate(-2deg); */
	}
	.boxinner {
		transform: rotate(2deg);
		margin: 15px;
		/*   padding:0 5px; */
		float: right;
		background: #ddd;
		border: 1px solid #222;
		box-shadow: 3px 3px 0 #222;
	}
</style>
