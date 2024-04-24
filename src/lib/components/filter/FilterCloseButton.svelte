<script>
	import { _ } from 'svelte-i18n';
	import { pushState } from '$app/navigation';
	import RotoclearSimpleButton from '../buttons/RotoclearSimpleButton.svelte';
	import { page } from '$app/stores';
	function closeFilterModal() {
		pushState('', { ...$page.state, isFilterModalOpen: false });
	}
</script>

<RotoclearSimpleButton on:click={closeFilterModal}>
	{$_('close')}
</RotoclearSimpleButton>
