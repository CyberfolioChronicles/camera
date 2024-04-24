<script>
</script>

<button on:click>
	<div class="button__icon">
		<slot name="icon" />
	</div>
	<div class="button__title">
		<slot class="button__title" name="title" />
	</div>
</button>

<style>
	button {
		position: relative;
		aspect-ratio: 1 / 1;
		border-radius: 20%;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: var(--rotoclear-grey);
		width: 100px;
		height: 100px;
	}
	.button__icon {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 8px;
	}
	.button__title {
		color: white;
		position: absolute;
		bottom: 16px;
		width: 100%;
	}
</style>
