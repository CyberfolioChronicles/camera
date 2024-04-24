<script>
	import { _ } from 'svelte-i18n';
	import RotoclearRoundedSquareButton from '../buttons/rotoclearRoundedSquareButton.svelte';
	function handleClick() {
		console.log('PiP button clicked');
	}
</script>

<RotoclearRoundedSquareButton on:click={handleClick}>
	<enhanced:img slot="icon" src="$lib/assets/icons/rc_pip.svg" alt={$_('pictureInPicture')} />
	<span slot="title">
		{$_('pictureInPicture')}
	</span>
</RotoclearRoundedSquareButton>
