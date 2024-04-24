<script>
	export let icon = '';
</script>

<button on:click>
	<img src={icon} />
</button>

<style>
	button {
		border-radius: 50%;
		background-color: var(--midnight-surf);
		display: flex;
		align-items: center;
		justify-content: center;
		height: var(--icon-button-size);
		width: var(--icon-button-size);
		box-shadow: var(--box-shadow);
		border: none;
	}
</style>
