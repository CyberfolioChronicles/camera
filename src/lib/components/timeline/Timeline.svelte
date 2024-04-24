<script>
	import { writable } from 'svelte/store';
	import TimeLineItem from './TimeLineItem.svelte';
	import { onMount } from 'svelte';
	let length = writable(0);
	let left = writable(0);
	const updateInterval = 1000;
	/**
	 * @type {import('svelte/store').Writable<{length: number, left: number, color: string, visible: boolean}[]>}
	 */
	let items = writable([]);
	let itemCount = 20;

	function createRandomItem() {
		return {
			length: Math.floor(Math.random() * 100),
			left: Math.floor(Math.random() * 100),
			color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
			visible: true
		};
	}
	onMount(() => {
		let newItems = [];
		for (let i = 0; i < itemCount; i++) {
			newItems.push(createRandomItem());
		}
		items.set(newItems);
	});
	setInterval(() => {
		items.update((currentItems) => {
			return currentItems.map((item) => {
				const offsetLength = Math.floor(Math.random() * 20) - 10;
				const offsetLeft = Math.floor(Math.random() * 20) - 10;
				const visible = Math.random() > 0.5;
				return {
					...item,
					length: (item.length + offsetLength) % 100,
					left: (item.left + offsetLeft) % 100,
					visible: visible
				};
			});
		});
	}, updateInterval);

	setInterval(() => {
		length.set(Math.floor(Math.random() * 100));
		left.set(Math.floor(Math.random() * 100));
	}, updateInterval);
</script>

<div class="timeline-container" style="--updateInterval: {updateInterval}ms">
	{#each $items as item, i}
		{#if item.visible}
			<TimeLineItem
				color={item.color}
				length={item.length.toString() + 'px'}
				left={item.left.toString() + '%'}
				name={'Item ' + i}
			/>
		{/if}
	{/each}
</div>

<style>
	.timeline-container {
		height: 60px;
		position: relative;
	}
</style>
