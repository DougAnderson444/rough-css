<script>
	let min = -1;
	let max = 2; // 1 or 2 looks like a sketch

	let high90s = () => 100 - Math.random() * (max - min) + min;
	let singlDigs = () => 1 + Math.random() * (max - min) + min;

	let bordRad = `${high90s()}% ${singlDigs()}% ${high90s()}% ${singlDigs()}%/${singlDigs()}% ${high90s()}% ${singlDigs()}% ${high90s()}%`;

	let borderWidth = `${singlDigs()}px ${singlDigs()}px ${singlDigs()}px ${singlDigs()}px`;

	let rVal = Math.floor(singlDigs() / 2) + 45;
	let rotate = `rotate(${rVal}deg)`;

	let mounted = false;
</script>

<div class="outter">
	<div
		class="box"
		style:border-radius={bordRad}
		style:transform={`rotate(${rVal}deg)`}
		style:border-width={borderWidth}
	>
		<div contenteditable style:transform={`rotate(${-rVal}deg)`}>
			<slot />
		</div>
	</div>
</div>

<style>
	div {
		float: left;
	}
	.outter {
		display: flex;
		flex-direction: column;
	}
	.box {
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		aspect-ratio: 1 / 1;
		margin: 5px;
		min-width: fit-content;
		background-color: inherit;
		border: solid black;
		border-color: inherit !important;
		padding: 15px;
	}
</style>
