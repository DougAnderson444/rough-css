<script>
	import { RoughBox, RoughUnderline } from '@douganderson444/rough-css';
</script>

<RoughBox>
	Hello
	<div slot="boxinner" style="padding:4px">World</div>
	<p contenteditable>This is all CSS! Edit me!</p>
</RoughBox>

<RoughBox>
	<RoughUnderline>@DougAnderson444</RoughUnderline>
	<div slot="boxinner" style="background:#1DA1F2; color:white; padding:4px">Twitter</div>
</RoughBox>
