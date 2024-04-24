<script>
	import { page } from '$app/stores';
	import FilterItem from './FilterItem.svelte';
	import { derived, readable } from 'svelte/store';
	import SelectedFilter from './SelectedFilter.svelte';
	import FilterCloseButton from './FilterCloseButton.svelte';
	import Modal from '../modals/Modal.svelte';
	const categories = readable([
		{
			name: 'Category 1',
			color: '#ff00cc',
			selected: true
		},
		{
			name: 'Category 2',
			color: '#ffdfcc',
			selected: false
		}
	]);
	let selected = derived(categories, ($categories) => {
		return $categories.filter((category) => category.selected).length;
	});
	function handleFilterClick(e) {
		console.log(e.target);
	}
</script>

{#if $page.state.isFilterModalOpen}
	<Modal>
		{#each $categories as category}
			<FilterItem
				name={category.name}
				color={category.color}
				on:click={handleFilterClick}
				selected={category.selected}
			/>
		{/each}
		<div class="filter-modal__bottom">
			<SelectedFilter selectedCount={$selected} />
			<FilterCloseButton />
		</div>
	</Modal>
{/if}

<style>
	.filter-modal__bottom {
		position: relative;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
</style>
