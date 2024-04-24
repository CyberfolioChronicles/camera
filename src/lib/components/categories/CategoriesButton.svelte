<script>
	import { _ } from 'svelte-i18n';
	import RotoclearPillButton from '../buttons/RotoclearPillButton.svelte';
	import { pushState } from '$app/navigation';
	import { page } from '$app/stores';
	function showCategories() {
		pushState('', { ...$page.state, isCategoriesModalOpen: true });
	}
</script>

<RotoclearPillButton on:click={showCategories}>
	<span slot="title">{$_('categories')}</span>
</RotoclearPillButton>
