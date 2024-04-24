<script>
	import { _ } from 'svelte-i18n';

	import ButtonSlider from '../inputs/ButtonSlider.svelte';
</script>

<ButtonSlider key="light1">
	<enhanced:img slot="icon" src="$lib/assets/icons/rc_settings.svg" alt={$_('light')} />
	<span slot="title">
		{$_('light')}
	</span>
</ButtonSlider>
