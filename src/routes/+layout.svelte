<script>
	import { setContext } from 'svelte';
	import { ws } from '$lib/connector/websocket';
	import { onMount } from 'svelte';
	import DisconnectedOverlay from '$lib/components/connection/DisconnectedOverlay.svelte';
	setContext('websocketConnectionStatus', ws.connected);
	onMount(() => {
		ws.connect();
	});
</script>

<slot />
<DisconnectedOverlay />

<style lang="scss">
	@import 'src/sass/index.scss';
</style>
