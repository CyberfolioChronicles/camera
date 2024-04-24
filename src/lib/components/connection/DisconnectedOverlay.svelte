<script>
	import { getContext } from 'svelte';
	import { fade } from 'svelte/transition';
	import { ws } from '$lib/connector/websocket';
	import { derived } from 'svelte/store';
	let showOverlay = false;
	getContext('websocketConnectionStatus').subscribe((/** @type {boolean} */ value) => {
		showOverlay = !value;
	});
	const retryCount = derived(ws.retryCountStore, ($retryCount) => {
		return $retryCount;
	});
</script>

{#if showOverlay}
	<div class="disconnected-overlay" transition:fade>
		<div class="disconnected-overlay__content">
			<h1>Disconnected</h1>
			<p>Reconnecting...</p>
			<p>Try {$retryCount}</p>
		</div>
	</div>
{/if}

<style>
	.disconnected-overlay {
		display: flex;
		align-items: center;
		justify-content: center;
		position: absolute;
		top: 0;
		left: 0;
		height: 100vh;
		width: 100vw;
		background-color: var(--midnight-surf);
		font-size: calc(15px + 2vw);
		color: var(--polar-white);
	}
</style>
