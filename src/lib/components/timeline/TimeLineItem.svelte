<script>
	import { fade } from 'svelte/transition';

	export let color = 'red';
	export let length = '100px';
	export let left = '0%';
	export let name = 'Item';
</script>

<div
	class="timeline-item"
	style="--item-color: {color}; --item-length: {length}; --item-left: {left}"
	transition:fade
>
	<span class="timeline-item__name">{name}</span>
</div>

<style>
	.timeline-item {
		position: absolute;
		border: 1px solid var(--item-color);
		height: 100%;
		overflow: hidden;
		border-radius: 50px;
		width: var(--item-length);
		display: flex;
		align-items: center;
		justify-content: center;
		left: var(--item-left);
		transition:
			width linear var(--updateInterval),
			left linear var(--updateInterval);
	}
	.timeline-item::before {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		background-color: var(--item-color);
		opacity: 0.75;
	}
	.timeline-item__name {
		position: relative;
		color: hsl(from var(--item-color) calc(h + 180) s l);
	}
</style>
