<script>
</script>

<button on:click>
	<div class="button__background"></div>
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
		background: none;
		padding: 15px;
		color: var(--polar-white);
		border-radius: 25px;
	}
	.button__background {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: var(--midnight-surf-opacity-69);
		filter: brightness(1.16);
		border-radius: 25px;
		box-shadow: var(--box-shadow);
		backdrop-filter: blur(10px);
	}

	.button__icon,
	.button__title {
		position: relative;
	}
</style>
