<script>
	let min = -1;
	let max = 1.5; // 1 or 2 looks like a sketch

	let high90s = () => 100 - Math.random() * (max - min) + min;
	let singlDigs = () => 1 + Math.random() * (max - min) + min;

	let bordRad = `${high90s()}% ${singlDigs()}% ${high90s()}% ${singlDigs()}%/${singlDigs()}% ${high90s()}% ${singlDigs()}% ${high90s()}%`;

	let borderWidth = `${singlDigs()}px ${singlDigs()}px ${singlDigs()}px ${singlDigs()}px`;

	let rotate = () => `rotate(${Math.floor(singlDigs() / 2)}deg)`;
</script>

<div
	class="gradient-box"
	style:border-radius={bordRad}
	style:border-width={borderWidth}
	style="--border: {max}px;"
>
	<slot />
</div>

<style>
	.gradient-box {
		display: flex;
		align-items: center;
		width: 90%;
		margin: auto;
		max-width: 22em;

		position: relative;
		padding: 30% 2em;
		box-sizing: border-box;

		color: rgb(78, 78, 78);
		background-color: #fff;
		background-clip: padding-box; /* !importanté */
		border: solid var(--border) transparent; /* !importanté */
		border-radius: 1em;
	}
	.gradient-box:before {
		content: '';
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: -1;
		margin: calc(-1 * var(--border)); /* !importanté */
		border-radius: inherit; /* !importanté */
		background: linear-gradient(to right, rgb(41, 41, 41), rgb(146, 146, 146));
	}
</style>
