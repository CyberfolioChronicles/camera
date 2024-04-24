<div class="container">
	<div class="modal">
		<div class="modal__background"></div>
		<slot>No Content</slot>
	</div>
</div>

<style>
	.container {
		position: absolute;
		left: 0;
		top: 0;
	}
	.modal {
		position: relative;
		min-width: 314px;
		left: 0;
		top: 0;
		display: flex;
		flex-direction: column;
		padding: 10px;
		gap: 10px;
		z-index: 10;
		border-radius: 35px;
		background: none;
	}
	.modal__background {
		content: '';
		position: absolute;
		left: 0;
		top: 0;
		background: var(--polar-white-opacity-69);
		backdrop-filter: blur(10px);
		box-shadow: var(--box-shadow);
		border-radius: 35px;
		width: 100%;
		height: 100%;
	}
</style>
