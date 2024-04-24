<button class="rotoclear-simple-button" on:click>
	<slot>No Text</slot>
</button>

<style>
	.rotoclear-simple-button {
		position: relative;
		display: flex;
		justify-content: space-between;
		background: transparent;
		align-items: center;
		color: var(--polar-white);
		padding: 10px 20px;
		background-color: var(--midnight-surf);
		border: 1px solid var(--midnight-surf);
		border-radius: 30px;
	}
</style>
