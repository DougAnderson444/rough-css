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

<!-- 
style:border-radius={bordRad} style:transform style:border-width={borderWidth}
 -->
<div>
	<slot>bangers?</slot>
	<div
		class="underline"
		style:border-radius={bordRad}
		style:transform
		style:border-width={borderWidth}
	/>
</div>

<style>
	div {
		font-family: 'Bangers', cursive;
		font-size: 25px;
	}
	@font-face {
		font-family: 'Bangers';
		font-style: normal;
		font-weight: 400;
		/* src: url(https://fonts.googleapis.com/css?family=Bangers); */
		src: url('/fonts/Bangers.woff2'); /* IE9 Compat Modes */
		src: local(''), url('/fonts/Bangers.woff2?#iefix') format('embedded-opentype'),
			/* IE6-IE8 */ url('fonts/Bangers.woff2') format('woff2'),
			/* Super Modern Browsers */ url('/fonts/Bangers.woff') format('woff'),
			/* Modern Browsers */ url('/fonts/Bangers.ttf') format('truetype'),
			/* Safari, Android, iOS */ url('/fonts/Bangers.svg#Lora') format('svg'); /* Legacy iOS */
	}

	.underline {
		border-top: solid red;
		float: left;
		width: 90%;
		height: 1em;
		opacity: 0.75;
	}
</style>
