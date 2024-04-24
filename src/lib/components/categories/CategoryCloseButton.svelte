<script>
	import { _ } from 'svelte-i18n';
	import { pushState } from '$app/navigation';
	import RotoclearSimpleButton from '../buttons/RotoclearSimpleButton.svelte';
	import { page } from '$app/stores';
	function closeCategoriesModal() {
		pushState('', { ...$page.state, isCategoriesModalOpen: false });
	}
</script>

<RotoclearSimpleButton on:click={closeCategoriesModal}>
	{$_('close')}
</RotoclearSimpleButton>
