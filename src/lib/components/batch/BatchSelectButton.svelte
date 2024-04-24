<script>
	import { _ } from 'svelte-i18n';
	import RotoclearPillButton from '../buttons/RotoclearPillButton.svelte';
</script>

<RotoclearPillButton>
	<span slot="title">{$_('batch-action')}</span>
</RotoclearPillButton>
