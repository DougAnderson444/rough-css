<script>
	let min = -1;
	let max = 2; // 1 or 2 looks like a sketch

	let high90s = () => 100 - Math.random() * (max - min) + min;
	let singlDigs = () => 1 + Math.random() * (max - min) + min;

	let bordRad = `${high90s()}% ${singlDigs()}% ${high90s()}% ${singlDigs()}%/${singlDigs()}% ${high90s()}% ${singlDigs()}% ${high90s()}%`;

	let borderWidth = `${singlDigs()}px ${singlDigs()}px ${singlDigs()}px ${singlDigs()}px`;

	let rotate = () => `rotate(${Math.floor(singlDigs() / 2)}deg)`;
</script>

<div
	class="box"
	style:border-radius={bordRad}
	style:transform={rotate()}
	style:border-width={borderWidth}
>
	<slot />
</div>

<style>
	.box {
		margin: 5px;
		min-width: 250px;
		background: #fff;
		border: solid black;
		border-color: black;
		float: left;
		padding: 15px;
	}
</style>
