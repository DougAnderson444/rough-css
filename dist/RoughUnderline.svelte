<script>
	let min = 1;
	let max = 4; // 1 or 2 looks like a sketch

	let high90s = () => 100 - Math.random() * (max - min) + min;
	let singlDigs = () => 1 + Math.random() * (max - min) + min;

	let bordRad = `${high90s()}% ${high90s()}% ${high90s()}% ${high90s()}%/${high90s()}% ${
		singlDigs() * 4
	}% ${singlDigs() * 4}% ${high90s()}%`;

	let borderWidth = `${singlDigs() * 2}px ${singlDigs()}px`;

	let transform = `rotate(${Math.floor(singlDigs())}deg); translate(-100%)`;
</script>

<div>
	<slot />
	<div
		class="underline"
		style:border-radius={bordRad}
		style:transform
		style:border-width={borderWidth}
	/>
</div>

<style>
	.underline {
		border-top: solid red;
		float: left;
		width: 90%;
		height: 1em;
		opacity: 0.75;
	}
</style>
