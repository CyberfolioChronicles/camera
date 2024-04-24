<script>
</script>

<button class="round-dot-button" on:click> </button>

<style>
	.round-dot-button {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 40px;
		height: 40px;
		border-radius: 50%;
		background-color: var(--rotoclear-grey);
	}

	.round-dot-button::before {
		content: '\2022 \2022 \2022';
		color: #fff;
		font-size: 20px;
	}
</style>
