<script>
	import { ws } from '$lib/connector/websocket';
	import { writable } from 'svelte/store';
	export let key;
	const value = writable(0);
	ws.subscribe(key, (v) => {
		value.set(v);
	});
</script>

<span>{$value}</span>
