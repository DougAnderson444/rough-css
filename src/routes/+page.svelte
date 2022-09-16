<script>
	import {
		RoughBox,
		RoughTitleBox,
		RoughUnderline,
		RoughCircle,
		RoughDiamond
	} from '@douganderson444/rough-css';
</script>

<div class="architect">
	<RoughBox>
		Use RoughCSS
		<RoughTitleBox>
			<div style="padding:5px">About</div>
		</RoughTitleBox>
		<p>This is all HTML + CSS! NO SVGs. Just a bit of JS to get some random widths.</p>
	</RoughBox>

	<RoughCircle>
		<div style="font-family: monospace;">
			{`<RoughCircle>`}<br />Circles<br />{`</RoughCircle>`}
		</div>
	</RoughCircle>
	<RoughDiamond>Diamond <br />in the <br />RoughCss</RoughDiamond>
	<RoughBox>
		<RoughTitleBox>
			<div style="background:#1DA1F2; color:white; padding:4px">Twitter</div>
		</RoughTitleBox>
		<RoughUnderline>@DougAnderson444</RoughUnderline>
	</RoughBox>
</div>

<style>
	.architect {
		font-family: 'Architects Daughter', cursive;
		font-weight: normal;
		font-style: normal;
	}
	@font-face {
		font-family: 'Architects Daughter';
		src: url('/fonts/architect/ArchitectsDaughter-Regular.eot');
		src: local('Architects Daughter Regular'), local('ArchitectsDaughter-Regular'),
			url('/fonts/architect/ArchitectsDaughter-Regular.eot?#iefix') format('embedded-opentype'),
			url('/fonts/architect/ArchitectsDaughter-Regular.woff2') format('woff2'),
			url('/fonts/architect/ArchitectsDaughter-Regular.woff') format('woff'),
			url('/fonts/architect/ArchitectsDaughter-Regular.ttf') format('truetype'),
			url('/fonts/architect/ArchitectsDaughter-Regular.svg#ArchitectsDaughter-Regular')
				format('svg');
		font-weight: normal;
		font-style: normal;
		font-display: swap;
	}

	@font-face {
		font-family: 'Bangers';
		font-style: normal;
		font-weight: 400;
		src: url(https://fonts.googleapis.com/css?family=Bangers);
	}
</style>
