<script>
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
>
	<div class="inner" contenteditable>
		<slot />
	</div>
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
		background: #fff;
		border: solid black;
		border-color: black;
		float: left;
		text-align: center;
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
