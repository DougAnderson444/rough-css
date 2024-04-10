<script>
  export let contenteditable = false;
	let min = -1;
	let max = 2; // 1 or 2 looks like a sketch

	let high90s = () => 100 - Math.random() * (max - min) + min;
	let singlDigs = () => 1 + Math.random() * (max - min) + min;

	let bordRad = `${
		high90s() * 1.12
	}% ${high90s()}% ${high90s()}% ${high90s()}%/${high90s()}% ${high90s()}% ${high90s()}% ${high90s()}%`;

	let borderWidth = `${singlDigs() * 0}px ${singlDigs()}px ${singlDigs()}px ${singlDigs()}px`;

	let rotate = () => `rotate(${Math.floor(singlDigs() / 2)}deg)`;
</script>

<div
	class="circle"
	style:border-radius={bordRad}
	style:transform={rotate()}
	style:border-width={borderWidth}
	contenteditable={contenteditable}
>
	<slot />
</div>

<style>
	.circle {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 5px;
		min-width: fit-content;
		height: auto;
		aspect-ratio: 1 / 1;
		background-color: inherit;
		border: solid black;
		border-color: inherit !important;
		float: left;
		text-align: center;
	}
</style>
