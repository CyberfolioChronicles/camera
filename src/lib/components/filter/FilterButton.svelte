<script>
	import { _ } from 'svelte-i18n';
	import RotoclearPillButton from '../buttons/RotoclearPillButton.svelte';
	import { pushState } from '$app/navigation';
	import { page } from '$app/stores';
	function showFilters() {
		pushState('', { ...$page.state, isFilterModalOpen: true });
	}
</script>

<RotoclearPillButton on:click={showFilters}>
	<span slot="title">{$_('filters')}</span>
</RotoclearPillButton>
