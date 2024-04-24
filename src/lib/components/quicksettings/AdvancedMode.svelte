<script>
	import { _ } from 'svelte-i18n';
	import { goto } from '$app/navigation';
	import RotoclearRoundedSquareButton from '../buttons/rotoclearRoundedSquareButton.svelte';
	function handleClick() {
		goto('/advancedMode');
	}
</script>

<RotoclearRoundedSquareButton on:click={handleClick}>
	<enhanced:img slot="icon" src="$lib/assets/icons/rc_settings.svg" alt={$_('advancedMode')} />
	<span slot="title">
		{$_('advancedMode')}
	</span>
</RotoclearRoundedSquareButton>
