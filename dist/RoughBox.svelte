<script>
	let min = -1;
	let max = 3; // 1 or 2 looks like a sketch

	let high90s = () => 100 - Math.random() * (max - min) + min;
	let singlDigs = () => 1 + Math.random() * (max - min) + min;

	let bordRad = `${high90s()}% ${singlDigs()}% ${high90s()}% ${singlDigs()}%/${singlDigs()}% ${high90s()}% ${singlDigs()}% ${high90s()}%`;

	let borderWidth = `${singlDigs()}px ${singlDigs()}px ${singlDigs()}px ${singlDigs()}px`;

	let rotate = () => `rotate(${Math.floor(singlDigs() / 2)}deg)`;
</script>

<div class="box" style:border-radius={bordRad} style:border-width={borderWidth} contenteditable>
	<slot />
</div>

<style>
	.box {
		margin: 5px;
		min-width: 250px;
		background-color: inherit;
		border: solid black;
		border-color: inherit !important;
		float: left;
		padding: 15px;
	}
</style>
