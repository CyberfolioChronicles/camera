<script>
</script>

<button class="category-item-add"> + </button>

<style>
	.category-item-add {
		position: relative;
		display: flex;
		justify-content: center;
		background: transparent;
		align-items: center;
		text-align: center;
		padding: 8px;
		gap: 5px;
		font-size: 34px;
	}
	.category-item-add::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
		background-color: var(--midnight-surf);
		opacity: 0.2;
		border-radius: 25px;
		box-shadow: var(--box-shadow);
	}
</style>
