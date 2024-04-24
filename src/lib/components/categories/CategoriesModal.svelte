<script>
	import { page } from '$app/stores';
	import Modal from '../modals/Modal.svelte';
	import CategorieItem from './CategorieItem.svelte';
	import CategoryAddItem from './CategoryAddItem.svelte';
	import CategoryCloseButton from './CategoryCloseButton.svelte';
	const categories = [
		{
			name: 'Category 1',
			color: '#ff00cc',
			id: 0
		},
		{
			name: 'Category 2',
			color: '#ffdfcc',
			id: 1
		}
	];
</script>

{#if $page.state.isCategoriesModalOpen}
	<Modal>
		<CategoryAddItem />
		{#each categories as category}
			<CategorieItem name={category.name} color={category.color} id={category.id} />
		{/each}
		<CategoryCloseButton />
	</Modal>
{/if}
