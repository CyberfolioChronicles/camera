<script>
	import { ws } from '$lib/connector/websocket';
	import { derived } from 'svelte/store';
	export let key = '';
	export let max = 100;
	export let min = 0;

	let mouseClicked = false;
	let websocketValue = ws.get(key);
	let valuePercentage = '0%';
	let value = derived(websocketValue, ($websocketValue) => {
		return $websocketValue;
	});
	value.subscribe((value) => {
		valuePercentage = `${((value - min) / (max - min)) * 100}%`;
	});

	function handleMouseDown() {
		mouseClicked = true;
	}
	/**
	 *
	 * @param {MouseEvent} event
	 */
	function handleMouseMove(event) {
		if (
			mouseClicked === false ||
			event.currentTarget === null ||
			!(event.currentTarget instanceof Element) ||
			event.currentTarget.getBoundingClientRect === undefined
		)
			return;
		const rect = event.currentTarget.getBoundingClientRect();
		const percentage = 100 - ((event.clientY - rect.top) / rect.height) * 100;
		if (percentage >= 0 && percentage <= 100) {
			ws.set(key, (percentage / 100) * (max - min) + min);
		}
	}

	function handleMouseUp() {
		mouseClicked = false;
	}
	/**
	 *
	 * @param {MouseEvent} event
	 */
	function handleClick(event) {
		if (
			event.currentTarget === null ||
			event.detail > 1 ||
			!(event.currentTarget instanceof Element) ||
			event.currentTarget.getBoundingClientRect === undefined
		)
			return;
		const rect = event.currentTarget.getBoundingClientRect();
		const percentage = 100 - ((event.clientY - rect.top) / rect.height) * 100;
		console.log(percentage);
		if (percentage >= 0 && percentage <= 100) {
			ws.set(key, (percentage / 100) * (max - min) + min);
		}
	}

	function handleDblClick() {
		ws.set(key, $value > min ? min : max);
	}
</script>

<button
	class="button-slider"
	role="slider"
	aria-valuemin={min}
	aria-valuemax={max}
	aria-valuenow={$value}
	tabindex="0"
	style="--value-percentage: {valuePercentage};"
	on:mousedown|preventDefault={handleMouseDown}
	on:mousemove|preventDefault={handleMouseMove}
	on:mouseup|preventDefault={handleMouseUp}
	on:dblclick={handleDblClick}
	on:click|preventDefault={handleClick}
	><div class="button-slider__icon">
		<slot name="icon" />
	</div>
	<div class="button-slider__title">
		<slot name="title" />
	</div></button
>

<style>
	.button-slider {
		border-radius: 20%;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: var(--rotoclear-grey);
		background: linear-gradient(
			0deg,
			#fff 0%,
			#fff var(--value-percentage),
			var(--rotoclear-grey) var(--value-percentage),
			var(--rotoclear-grey) 100%
		);
		aspect-ratio: 1 / 1;
		width: 100px;
		border: 1px solid black;
		cursor: pointer;
		user-select: none;
	}
	.button-slider__icon {
		width: 100%;
		height: 100%;
	}
	.button-slider__title {
		color: white;
		position: absolute;
		bottom: 16px;
		width: 100%;
		user-select: none;
	}
</style>
