<script>
	export let size = '100px';
</script>

<button on:click style="--button-size: {size}">
	<div class="button__background"></div>
	<div class="button__icon">
		<slot />
	</div>
</button>

<style>
	button {
		position: relative;
		background: none;
		padding: 15px;
		color: var(--polar-white);
		border-radius: 50%;
		width: var(--button-size);
		height: var(--button-size);
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.button__background {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: var(--polar-white-opacity-69);
		filter: brightness(1.16);
		border-radius: 50%;
		box-shadow: var(--box-shadow);
		backdrop-filter: blur(10px);
	}
	.button__icon {
		position: relative;
	}
</style>
